<script setup lang='ts'>
import { NAlert, NButton, NIcon, NModal, NResult, NTabPane, NTabs } from 'naive-ui'
import { computed, ref } from 'vue'
import { CloseOutline } from '@vicons/ionicons5'
import Phone from './Login/Phone.vue'
import Email from './Login/Email.vue'
import Wechat from './Login/Wechat.vue'
import { useAuthStore, useAppStore } from '@/store'

defineProps<Props>()
let timer: any
const authStore = useAuthStore()
const appStore = useAppStore()
const activeCount = ref(false)
const wxLoginUrl = ref('')
const sceneStr = ref('')

const registerSendStatus = computed(() => {
  return Number(authStore.globalConfig.registerSendStatus)
})

const registerSendModel3Count = computed(() => {
  return Number(authStore.globalConfig.registerSendModel3Count)
})

const registerSendModel4Count = computed(() => {
  return Number(authStore.globalConfig.registerSendModel4Count)
})

const registerSendDrawMjCount = computed(() => {
  return Number(authStore.globalConfig.registerSendDrawMjCount)
})

const wechatRegisterStatus = computed(() => Number(authStore.globalConfig.wechatRegisterStatus) === 1)
const phoneRegisterStatus = computed(() => Number(authStore.globalConfig.phoneRegisterStatus) === 1)
const emailRegisterStatus = computed(() => Number(authStore.globalConfig.emailRegisterStatus) === 1)

const disabledReg = computed(() => {
  return !wechatRegisterStatus.value && !phoneRegisterStatus.value && !emailRegisterStatus.value
})

interface Props {
  visible: boolean
}

const registerTips = computed(() => (`${appStore.getLanguage() == 'en-US' ? 'First certification: free' : '首次认证：赠送'}${registerSendModel3Count.value}${appStore.getLanguage() == 'en-US' ? 'integral base model' : '积分基础模型'} | ${registerSendModel4Count.value}${appStore.getLanguage() == 'en-US' ? 'points advanced model' : '积分高级模型'} | ${registerSendDrawMjCount.value}${appStore.getLanguage() == 'en-US' ? 'points lottery model' : '积分抽奖模型'}`))

function openDialog() {

}

function handleCloseDialog() {
  clearInterval(timer)
  wxLoginUrl.value = ''
  sceneStr.value = ''
  activeCount.value = false
}
</script>

<template>
  <NModal :show="visible" style="width: 90%; max-width: 500px" :on-after-enter="openDialog" :on-after-leave="handleCloseDialog">
    <div class="p-5 bg-white rounded dark:bg-slate-800">
      <div class="absolute top-3 right-3 cursor-pointer z-30" @click="authStore.setLoginDialog(false)">
        <NIcon size="20" color="#0e7a0d">
          <CloseOutline />
        </NIcon>
      </div>
      <!-- register -->
      <NTabs v-if="!disabledReg" type="line" animated>
        <NTabPane v-if="wechatRegisterStatus" name="wechat" :tab="$t('login.wechat')">
          <Wechat />
        </NTabPane>
        <NTabPane v-if="emailRegisterStatus" name="email" :tab="$t('loginWechat.emailLogin')">
          <Email />
        </NTabPane>
        <NTabPane v-if="phoneRegisterStatus" name="phone" :tab="$t('login.mobileLogin')">
          <Phone />
        </NTabPane>
      </NTabs>
      <NAlert v-if="registerSendStatus && !disabledReg" type="success" :show-icon="false" class="mt-5">
        {{ registerTips }}
      </NAlert>
      <div v-if="disabledReg">
        <NResult
          size="small"
          status="403"
          :title="$t('login.closed')"
          :description="$t('login.contactToActivate')"
        >
          <template #footer>
            <NButton @click="authStore.setLoginDialog(false)">
              {{ $t('login.understood') }}
            </NButton>
          </template>
        </NResult>
      </div>
    </div>
  </NModal>
</template>
