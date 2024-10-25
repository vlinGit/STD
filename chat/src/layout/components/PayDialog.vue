<script setup lang='ts'>
import type { CountdownInst } from 'naive-ui'
import { NButton, NCountdown, NIcon, NModal, NRadio, NRadioGroup, NSkeleton, NSpace, NSpin, useMessage } from 'naive-ui'
import { computed, ref, watch } from 'vue'
import { CloseOutline, PaperPlaneOutline } from '@vicons/ionicons5'
import { useAuthStore, useGlobalStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { fetchOrderBuyAPI, fetchOrderQueryAPI } from '@/api/order'

import type { ResData, paymentRes } from '@/api/types'
import QRCode from '@/components/common/QRCode/index.vue'
import alipay from '@/assets/alipay.png'
import wxpay from '@/assets/wxpay.png'
defineProps<Props>()

const { isMobile } = useBasicLayout()

const authStore = useAuthStore()
const useGlobal = useGlobalStore()
const POLL_INTERVAL = 1000
const ms = useMessage()
const active = ref(true)
const payType = ref('alipay') // 默认支付宝支付
const payResult = ref('')

interface Props {
  visible: boolean
}

/* 是否是微信环境 */
const isWxEnv = computed(() => {
  const ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) && ua?.match(/MicroMessenger/i)?.[0] === 'micromessenger'
})

/* 开启的支付平台 */
const payPlatform = computed(() => {
  const { payHupiStatus, payEpayStatus, payMpayStatus, payWechatStatus } = authStore.globalConfig
  if (Number(payWechatStatus) === 1)
    return 'wechat'

  if (Number(payEpayStatus) === 1)
    return 'epay'

  if (Number(payMpayStatus) === 1)
    return 'mpay'

  if (Number(payHupiStatus) === 1)
    return 'hupi'

  return 'pockyt'
})

/* 支付平台开启的支付渠道 */
const payChannel = computed(() => {
  const { payEpayChannel, payMpayChannel } = authStore.globalConfig

  if (payPlatform.value === 'mpay')
    return payMpayChannel ? JSON.parse(payMpayChannel) : []

  if (payPlatform.value === 'epay')
    return payEpayChannel ? JSON.parse(payEpayChannel) : []

  if (payPlatform.value === 'wechat')
    return ['wxpay']

  if (payPlatform.value === 'hupi')
    return ['wxpay']

  return ['pockyt']
})

const plat = computed(() => payType.value === 'wxpay' ? '微信' : '支付宝')
const countdownRef = ref<CountdownInst | null>()

const isRedirectPay = computed(() => {
  const { payEpayApiPayUrl } = authStore.globalConfig
  return (payPlatform.value === 'epay' && payEpayApiPayUrl.includes('submit')) || payPlatform.value === 'mpay'
})

watch(payType, () => {
  getPayUrl()
  countdownRef.value?.reset()
})

const orderId = ref('')
let timer: any
const payTypes = computed(() => {
  return [
    { label: '微信支付', value: 'wxpay', icon: wxpay, payChannel: 'wxpay' },
    { label: '支付宝支付', value: 'alipay', icon: alipay, payChannel: 'alipay' },
  ].filter(item => payChannel.value.includes(item.payChannel))
})

const queryOrderStatus = async () => {
  if (!orderId.value)
    return
  const result: ResData = await fetchOrderQueryAPI({ orderId: orderId.value })
  const { success, data } = result
  if (success) {
    const { status } = data
    if (status === 1 && !payResult.value) {
      clearInterval(timer)
      ms.success('恭喜你支付成功、祝您使用愉快！')
      active.value = false
      payResult.value = 'success'
      authStore.getUserInfo()
      setTimeout(() => {
        useGlobal.updatePayDialog(false)
      }, 2000)
    }
  }
}

const orderInfo = computed(() => useGlobal?.orderInfo)
const url_qrcode = ref('')
const qrCodeloading = ref(true)
const redirectloading = ref(true)
const redirectUrl = ref('')

function handleCloseDialog() {
  useGlobal.updateOrderInfo({})
  clearInterval(timer)
}

/* 请求二维码 */
async function getPayUrl(cb?: Function) {
//   !isRedirectPay.value && (qrCodeloading.value = true)
//   isRedirectPay.value && (redirectloading.value = true)
  redirectloading.value = true
  payResult.value = ''
  let qsPayType = null
  qsPayType = payType.value
  if (payPlatform.value === 'wechat')
    qsPayType = isWxEnv.value ? 'jsapi' : 'native'

  try {
    const res: ResData = await fetchOrderBuyAPI({ goodsId: orderInfo.value.pkgInfo.id, payType: qsPayType })

    console.log('res===', res)
    const { orderId: id, redirectUrl: url } = res.data
    console.log('url===', url)
    redirectUrl.value = url
    orderId.value = id
    qrCodeloading.value = false
    redirectloading.value = false
    typeof cb === 'function' && cb()
  }
  catch (error) {
    console.log('error000', error)
    useGlobal.updatePayDialog(false)
    qrCodeloading.value = false
    redirectloading.value = false
  }
}

/* 跳转支付 */
function handleRedPay() {
  window.open(redirectUrl.value)
}

async function handleOpenDialog() {
  await getPayUrl(() => {
    timer = setInterval(() => {
      queryOrderStatus()
    }, POLL_INTERVAL)
  })
}

function handleFinish() {
  ms.error('支付超时，请重新下单!')
  clearInterval(timer)
  useGlobal.updatePayDialog(false)
  // useGlobal.updateGoodsDialog(true)
}
</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 550px;" :on-after-enter="handleOpenDialog" :on-after-leave="handleCloseDialog">
    <div class="p-4 bg-white rounded dark:bg-slate-800 pay">
      <div class="flex justify-between" @click="useGlobal.updatePayDialog(false)">
        <div class="flex text-xl font-bold mb-[20px] bg-currentflex items-center ">
          <NIcon size="0" color="">
            <PaperPlaneOutline />
          </NIcon>
          <span class="mt-8 ml-[40px]">商品支付</span>
        </div>
        <NIcon size="20" color="black" class="mt-10 mr-4 cursor-pointer">
          <CloseOutline />
        </NIcon>
      </div>
      <div class="">
        <div>
          <span class="ml-6 font-bold p-4 flex flex-col items-center">支付金额</span><br>
          <span
            class="mt-[-40px] flex flex-col items-center"
            style="font-weight: bold;
                      font-size: 42px;
                      margin-bottom: 20px;
                      color: white; /* 设置文字颜色为白色 */
                      text-shadow:4px 4px 0 black,      /* 黑色边框的阴影 */
                                   -1px -1px 0 black,    /* 左上 */
                                   1px -1px 0 black,     /* 右上 */
                                   -1px 1px 0 black,     /* 左下 */
                                   1px 1px 0 black;      /* 右下 */
                      font-family: 'DM Sans', sans-serif;margin-bottom: 40px;"
          >{{ `$${orderInfo.pkgInfo?.price}` }}</span>
        </div>
        <div class="mt-[-20px] w-full text-center font-bold text-sm flex flex-col justify-between h-full">
          <span>请在
            <span class="w-[60px] inline-block text-[#27E093] text-left"><NCountdown ref="countdownRef" :active="active" :duration="300 * 1000" :on-finish="handleFinish" />
            </span>
            时间内完成支付！
          </span>
        </div>
      </div>
      <div class="mt-8 justify-between ml-8 mt-2 flex">
        <span class="whitespace-nowrap font-bold">套餐名称：</span><span class="text-right mr-10"> {{ orderInfo.pkgInfo?.name }}</span>
      </div>
      <div class="justify-between ml-8 mt-2 flex">
        <span class="whitespace-nowrap font-bold">套餐描述：</span><span class="text-right mr-10"> {{ orderInfo.pkgInfo?.des }} </span>
      </div>

      <div class=" flex flex-col" :class="[isMobile ? 'w-full ' : ' ml-10 w-[200] ']">
        <!-- <h4 class="mb-10 font-bold text-lg">
              支付方式
            </h4> -->

        <div class="mt-6 w-full text-center font-bold text-sm flex flex-col justify-between h-full" :class="[isMobile ? 'ml-0' : 'ml-0']">
          <NButton class="mr-10 pay-button" type="primary" ghost :disabled="redirectloading" :loading="redirectloading" @click="handleRedPay">
            点击前往支付
          </NButton>
        </div>
        <NRadioGroup v-model:value="payType" name="radiogroup" class="flex">
          <NSpace :vertical="!isMobile" justify="center" :size="isMobile ? 10 : 35" class="w-full">
            <NRadio v-for="pay in payTypes" :key="pay.value" :value="pay.value">
              <div class="flex items-center">
                <img class="h-4 object-contain mr-2" :src="pay.icon" alt=""> {{ pay.label }}
              </div>
            </NRadio>
          </NSpace>
        </NRadioGroup>
      </div>
    </div>
  </NModal>
</template>

<style lang="scss" scoped>
* {
    font-family: 'DM Sans', sans-serif; /* 设置全局字体为 DM Sans */
}
.pay {
  min-width: 400px;
  min-height: 400px;
  border:2px   solid #000000;
  border-radius: 2rem;
}
.pay-button{
    margin-top:20px;
    min-width: 150px;
    min-height: 50px;
    border:2px solid #000000; /* 按钮边框 */
    background-color: #ffffff; /* 按钮背景颜色 */
    border-radius: 2rem; /* 确保 Tab 有圆角 */
    text-align: center; /* 文本居中 */
    line-height: 50px; /* 使文字垂直居中 */
    font-weight: bold; /* 文字加粗 */

}
.pay-button:hover{
    font-weight: bold !important; /* 选中或悬停字体加粗 */
    color: #000000 !important; /* 悬停字体颜色 */
    background-color: #27E093 !important; /* 悬停背景颜色为绿色 */
    border-bottom: 6px solid #000000 !important; /* 悬停加粗的底边 */

}
</style>
