<script setup lang="ts">
import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import { NButton, NCard, NForm, NFormItem, NGrid, NGridItem, NInput, useMessage } from 'naive-ui'
import { ref } from 'vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useAuthStore, useAppStore } from '@/store'
import { fetchUpdatePasswordAPI } from '@/api'
import type { ResData } from '@/api/types'

interface ModelType {
  oldPassword: string
  password: string
  reenteredPassword: string
}

const modelRef = ref<ModelType>({
  oldPassword: '',
  password: '',
  reenteredPassword: '',
})
const model = modelRef

const formRef = ref<FormInst | null>(null)

const rPasswordFormItemRef = ref<FormItemInst | null>(null)

const appStore = useAppStore()

const rules: FormRules = {
  oldPassword: [
    {
      required: true,
      min: 6,
      message: appStore.getLanguage() == 'en-US' ? 'The minimum password length is 6 digits' : '密码最短长度为6位数',
      trigger: ['blur'],
    },
    {
      required: true,
      max: 30,
      message: appStore.getLanguage() == 'en-US' ? 'The maximum password length is 30 digits' : '密码最长长度为30位数',
      trigger: ['blur'],
    },
  ],
  password: [
    {
      required: true,
      message: appStore.getLanguage() == 'en-US' ? 'Please enter password' : '请输入密码',
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: appStore.getLanguage() == 'en-US' ? 'Please enter password again' : '请再次输入密码',
      trigger: ['input', 'blur'],
    },
    {
      validator: validatePasswordStartWith,
      message: appStore.getLanguage() == 'en-US' ? 'The two password inputs are inconsistent' : '两次密码输入不一致',
      trigger: 'input',
    },
    {
      validator: validatePasswordSame,
      message: appStore.getLanguage() == 'en-US' ? 'The two password inputs are inconsistent' : '两次密码输入不一致',
      trigger: ['blur', 'password-input'],
    },
  ],
}
function validatePasswordStartWith(
  rule: FormItemRule,
  value: string,
): boolean {
  return (
    !!modelRef.value.password
        && modelRef.value.password.startsWith(value)
        && modelRef.value.password.length >= value.length
  )
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === modelRef.value.password
}
function handlePasswordInput() {
  if (modelRef.value.reenteredPassword)
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
}

const { isSmallXl } = useBasicLayout()
const authStore = useAuthStore()
const ms = useMessage()

async function updatePassword(options: { oldPassword: string; password: string }) {
  const res: ResData = await fetchUpdatePasswordAPI(options)
  if (res.success)
    appStore.getLanguage() == 'en-US' ? ms.success('Password updated successfully, please log in to the system again!') : ms.success('密码更新成功、请重新登录系统！')
  resetForm()
  authStore.updatePasswordSuccess()
}

function resetForm() {
  modelRef.value = {
    oldPassword: '',
    password: '',
    reenteredPassword: '',
  }
}

function handleValidate(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const { oldPassword, password } = modelRef.value
      updatePassword({ oldPassword, password })
    }
  })
}
</script>

<template>
  <NCard>
    <template #header>
      <div>{{ $t('userCenter.changePassword') }}</div>
    </template>
    <NGrid :x-gap="24" :y-gap="24" :cols=" isSmallXl ? 1 : 3" class="mt-3">
      <NGridItem class="border rounded-sm p-3  dark:border-[#ffffff17]" span="2">
        <NForm ref="formRef" :model="model" :rules="rules">
          <NFormItem path="oldPassword" :label="$t('userCenter.oldPassword')">
            <NInput v-model:value="model.oldPassword" @keydown.enter.prevent />
          </NFormItem>
          <NFormItem path="password" :label="$t('userCenter.newPassword')">
            <NInput
              v-model:value="model.password"
              type="password"
              @input="handlePasswordInput"
              @keydown.enter.prevent
            />
          </NFormItem>
          <NFormItem
            ref="rPasswordFormItemRef"
            first
            path="reenteredPassword"
            :label="$t('userCenter.confirmPassword')"
          >
            <NInput
              v-model:value="model.reenteredPassword"
              :disabled="!model.password"
              type="password"
              tabindex="0"
              @keyup.enter="handleValidate"
            />
          </NFormItem>

          <div class="flex justify-between">
            <span class="text-[#95AAC9]">{{$t('share.relogin')}}</span>
            <NButton
              :disabled="model.oldPassword === null"
              type="primary"
              @click="handleValidate"
            >
              {{$t('share.updatePassword')}}
            </NButton>
          </div>
        </NForm>
      </NGridItem>
      <NGridItem class="border rounded-sm p-3  bg-[#f8f9fa] h-48 dark:bg-[#18181c]  dark:border-[#ffffff17]">
        <b class="text-base ">{{ $t('share.passwordReq') }}</b>
        <p class="text-[#95AAC9] mt-3">
          {{$t('userCenter.newPasswordReq')}}。
        </p>
        <div class="ml-3 text-[#95AAC9] mt-2">
          {{ $t('userCenter.minChar') }}
        </div>
        <div class="ml-3 text-[#95AAC9] mt-2">
          {{ $t('userCenter.maxChar') }}
        </div>
        <div class="ml-3 text-[#95AAC9] mt-2">
          {{ $t('userCenter.minNum') }}
        </div>
      </NGridItem>
    </NGrid>
  </NCard>
</template>
