<script lang="ts" setup>
import { NSkeleton, NSpace, useMessage } from 'naive-ui'
import { computed, onMounted, ref } from 'vue'
import { TitleBar } from '@/components/base'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { fetchGetPackageAPI } from '@/api/crami'
import { fetchOrderBuyAPI } from '@/api/order'
import type { ResData } from '@/api/types'
import { useAuthStore, useGlobalStoreWithOut, useAppStore } from '@/store'
const authStore = useAuthStore()
const appStore = useAppStore()  
const { isMobile } = useBasicLayout()
const message = useMessage()
const useGlobalStore = useGlobalStoreWithOut()

const isWxEnv = computed(() => {
  const ua = window.navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) && ua?.match(/MicroMessenger/i)?.[0] === 'micromessenger'
})

interface Pkg {
  id: number
  name: string
  coverImg: string
  des: string
  days: number
  rechargeType: number
  model3Count: number
  model4Count: number
  drawMjCount: number
  expireDateCn: string
  createdAt: Date
  price: number
}

const payPlatform = computed(() => {
  const { payHupiStatus, payEpayStatus, payMpayStatus, payWechatStatus } = authStore.globalConfig

  if (Number(payWechatStatus) === 1)
    return 'wechat'

  if (Number(payMpayStatus) === 1)
    return 'mpay'

  if (Number(payHupiStatus) === 1)
    return 'hupi'

  if (Number(payEpayStatus) === 1)
    return 'epay'
  return null
})

const payChannel = computed(() => {
  const { payEpayChannel, payMpayChannel } = authStore.globalConfig
  if (payPlatform.value === 'wechat')
    return ['wxpay']

  if (payPlatform.value === 'epay')
    return payEpayChannel ? JSON.parse(payEpayChannel) : []

  if (payPlatform.value === 'mpay')
    return payMpayChannel ? JSON.parse(payMpayChannel) : []

  if (payPlatform.value === 'hupi')
    return ['wxpay']

  return []
})

const packageList = ref<Pkg[]>([])
const pkgType = ref(1)
const loading = ref(false)

async function queryPkg() {
  try {
    loading.value = true
    const res: ResData = await fetchGetPackageAPI({ status: 1, type: pkgType.value, size: 30 })
    packageList.value = res.data.rows
    loading.value = false
  }
  catch (error) {
    loading.value = false
  }
}

const tips = computed(() => {
  const mobile = appStore.getLanguage() === 'en-US' ? 'Have fun exploring and welcome to our online store!' : '尽情探索，欢迎光临我们的在线商店！'
  const desktop = appStore.getLanguage() === 'en-US' ? 'Enjoy exploring, welcome to our online store, thank you for choosing us, and let us start a pleasant shopping journey together!' : '尽情探索，欢迎光临我们的在线商店、感谢您选择我们、让我们一同开启愉悦的购物之旅！'
  return isMobile.value ? mobile : desktop
})

function updateTabs(val: number) {
  pkgType.value = val
  queryPkg()
}

async function handlePayPkg(pkg: Pkg) {
  if (!payChannel.value.length)
    handleBuyGoods(pkg)
}

async function handleBuyGoods(pkg: Pkg) {
  // 如果是微信环境判断有没有开启微信支付,开启了则直接调用jsapi支付即可
  if (isWxEnv.value && payPlatform.value === 'wechat' && Number(authStore.globalConfig.payWechatStatus) === 1) {
    if (typeof WeixinJSBridge == 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
      }
      else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
      }
    }
    else {
      const res: ResData = await fetchOrderBuyAPI({ goodsId: pkg.id, payType: 'jsapi' })
      const { success, data } = res
      success && onBridgeReady(data)
    }
    return
  }

  /* 其他场景打开支付窗口 */
  useGlobalStore.updateOrderInfo({ pkgInfo: pkg })
  useGlobalStore.updateGoodsDialog(false)
  useGlobalStore.updatePayDialog(true)
}

function onBridgeReady(data: { appId: string; timeStamp: string; nonceStr: string; package: string; signType: string; paySign: string }) {
  const { appId, timeStamp, nonceStr, package: pkg, signType, paySign } = data
  if (!appId)
    return
  WeixinJSBridge.invoke('getBrandWCPayRequest', {
    appId, // 公众号ID，由商户传入
    timeStamp, // 时间戳，自1970年以来的秒数
    nonceStr, // 随机串
    package: pkg,
    signType, // 微信签名方式：
    paySign, // 微信签名
  },
  (res: any) => {
    if (res.err_msg === 'get_brand_wcpay_request:ok') {
      message.success('购买成功、祝您使用愉快!')
      setTimeout(() => {
        authStore.getUserInfo()
        useGlobalStore.updateGoodsDialog(false)
      }, 500)
    }
    else {
      message.warning('您还没有支付成功哟！')
    }
  })
}

onMounted(() => {
  queryPkg()
})
</script>

<template>
  <div class="">
    <TitleBar class="title-bar" :title="$t('member.title')" :des="tips" :class="[isMobile ? 'px-3' : 'px-24']" />
    <div class="flex justify-center items-center mt-8 text-center">
      <NButton class="pane">
        <NButton class="pane-1" :class="[{ active: pkgType === 1 }]" :type="pkgType === 1 ? 'primary' : 'default'" @click="updateTabs(1)">
          {{ $t('member.limitedPackages') }}
        </NButton>
        <NButton class="pane-2" :class="[{ active: pkgType === -1 }]" :type="pkgType === -1 ? 'primary' : 'default'" @click="updateTabs(-1)">
          {{ $t('member.permanentPackages') }}
        </NButton>
      </NButton>
    </div>
    <div class="mt-10 flex-1 pb-10 overflow-y-auto" :class="[isMobile ? 'px-3' : 'px-28']">
      <div v-if="!loading" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4 ">
        <div v-for="item in packageList" :key="item.id" class="card-item w-1/4 ">
          <div class="" :style="{ height: '40%' }">
            <div class="" />
            <div class="p-5 text-lg h-[160px] overflow-hidden relative text-center flex flex-col justify-between">
              {{ item.des }}
              <span
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
              >${{ item.price }}</span>
            </div>
            <div class="flex p-4 flex-col space-y-4 text-center" style="margin-top: -60px;">
              <h class="flex p-4 flex-col space-y-4 font-bold relative text-center">
                <span class="line2" />  {{ $t('member.packageTitle') }}
              </h>
              <div class="flex justify-between">
                <span>{{ $t('member.baseModelQuota') }}</span>
                <span>{{ item.model3Count || 0 }} {{ $t('chat.points') }}</span>
              </div>
              <div class="flex justify-between ">
                <span>{{ $t('member.advancedModelQuota') }}</span>
                <span>{{ item.model4Count || 0 }} {{ $t('chat.points') }}</span>
              </div>
              <div class="flex justify-between ">
                <span>{{ $t('member.mjPaintingMQuota') }}</span>
                <span>{{ item.drawMjCount || 0 }} {{ $t('chat.points') }}</span>
              </div>
            </div>
            <div class="px-4 flex-1 flex items-center justify-between">
              <div class="flex items-end font-bold">
                <span>{{ $t('member.packageValid') }} </span>
                <span class="text-lg font-bold" style="margin-left: 130px;">{{ item.days > 0 ? `${item.days} ${$t('common.days')}` : $t('common.permanent') }}</span>
              </div>
              <div />
            </div>
            <div class="flex justify-center mt-4">
              <NButton class="buy" @click="handlePayPkg(item)">
                {{ $t('common.buy') }}
              </NButton>
            </div>
          </div>
        </div>
        <div v-if="loading" class="">
          <div v-for="item in 4" :key="item" class="card-item w-1/4">
            <div class="w-full rounded-t-xl overflow-hidden" :style="{ height: '40%' }">
              <NSkeleton height="100%" width="100%" />
            </div>
            <div class="p-5  text-lg h-[160px]  border-b dark:border-[#ffffff17] overflow-ellipsis ">
              <NSpace vertical>
                <NSkeleton text :repeat="4" width="100%" :sharp="false" />
              </NSpace>
            </div>
            <div class="flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4">
              <NSpace vertical>
                <NSkeleton text :repeat="4" width="100%" :sharp="false" />
              </NSpace>
            </div>
            <div class="px-4 flex-1 flex items-center justify-between">
              <NSkeleton text :repeat="1" width="100%" :sharp="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
* {
    font-family: 'DM Sans', sans-serif; /* 设置全局字体为 DM Sans */
}
.line2 {
  flex: 1; /* 各自占据一部分空间 */
  height: 2px; /* 设置线条高度 */
  background-color: rgb(0, 0, 0); /* 设置线条颜色，可以根据需要修改 */
  margin: 0 10px; /* 线条与文字之间的间距 */
  align-self: center; /* 垂直居中对齐 */
}
.card-item{
  min-height: 420px;
  min-width:300px;
  border:2px solid #000000;
  border-radius: 2rem; /* 圆角 */
	transition: all 0.3s;
	cursor: pointer;
	&:hover{
		.right-icon {
			transform: scale(1.5);
			color: #27E093;
		}
		.cover{
			transform: scale(1.2);
			filter: brightness(1);
		}
		.line{
			flex: 1;
		}
	}
	.cover{
		transition: all .55s;
		filter: brightness(.8);
	}
	.right-icon{
		transition: all .35s;
	}
	.line{
		height: 2px;
		margin-left: 50px;
		background-color: #27E093;
		width: 0;
		transition: all .3s;
	}
}

.pane{
    max-width: 640px;
    height: fit-content;
    display: flex;
    justify-content: center;
    border: 2px solid #000000; /* 大按钮的边框 */
    border-radius: 2rem; /* 圆角 */
    background-color: #ffffff; /* 背景颜色 */
    cursor: pointer

}
.pane-1 {
    border-radius: 2rem; /* 确保 Tab 有圆角 */
    padding: 10px 20px;
    flex: 1; /* 让 Tab 均分容器宽度 */
    text-align: center; /* 文本居中 */
    font-weight: bold; /* 文字加粗 */
}
.pane-1.active {
  font-weight: bold; /* 选中字体加粗 */
  color:#000000!important; /* 选中的字体颜色 */
  background-color: #27E093 !important; /* 按钮背景颜色为绿色 */
  border-bottom: 6px solid #000000; /* 添加加粗的底边 */
}
.pane-1:hover {
    font-weight: bold !important; /* 选中或悬停字体加粗 */
    color: #000000 !important; /* 悬停字体颜色 */
    background-color: #27E093 !important; /* 悬停背景颜色为绿色 */
    border-bottom: 6px solid #000000 !important; /* 悬停加粗的底边 */
}
.pane-2  {
  border-radius: 2rem; /* 确保 Tab 有圆角 */
    padding: 10px 20px;
    flex: 1; /* 让 Tab 均分容器宽度 */
    text-align: center; /* 文本居中 */
    font-weight: bold; /* 文字加粗 */
}
.pane-2.active {
  font-weight: bold; /* 选中字体加粗 */
  color:#000000!important; /* 选中的字体颜色 */
  background-color: #27E093 !important; /* 按钮背景颜色为绿色 */
  border-bottom: 6px solid #000000; /* 添加加粗的底边 */
}
.pane-2:hover {
    font-weight: bold !important; /* 选中或悬停字体加粗 */
    color: #000000 !important; /* 悬停字体颜色 */
    background-color: #27E093 !important; /* 悬停背景颜色为绿色 */
    border-bottom: 6px solid #000000 !important; /* 悬停加粗的底边 */
}
.title-bar{
  color:#000000!important;
  border:none;
  margin-top: 100px ;
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
  width: 100%; /* 确保占满全宽 */
  text-align: center; /* 确保文本在 flex 项目中也居中 */
  }
  .buy{
    margin-top:20px;
    min-width: 200px;
    min-height: 30px;
    border:2px solid #000000; /* 按钮边框 */
    background-color: #ffffff; /* 按钮背景颜色 */
    border-radius: 2rem; /* 确保 Tab 有圆角 */
    text-align: center; /* 文本居中 */
    line-height: 30px; /* 使文字垂直居中 */
    font-weight: bold; /* 文字加粗 */
    text-transform: capitalize;
  }
  .buy:hover{
    font-weight: bold !important; /* 选中或悬停字体加粗 */
    color: #000000 !important; /* 悬停字体颜色 */
    background-color: #27E093 !important; /* 悬停背景颜色为绿色 */
    border-bottom: 6px solid #000000 !important; /* 悬停加粗的底边 */
  }
</style>
