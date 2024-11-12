<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
import { SvgIcon } from '@/components/common'
import { useChatStore } from '@/store'

const chatStore = useChatStore()

const loading = ref(false)

async function handleAddNewGroup() {
  loading.value = true
  try {
    await chatStore.addNewChatGroup()
    await chatStore.queryMyGroup()
    loading.value = false
  }
  catch (error) {
    loading.value = false
  }
}
</script>

<template>
  <div class=" w-full h-full flex justify-center items-center flex-col">
    <SvgIcon icon="token:chat" class="mb-4 inline-block text-6xl" style="color: #27E093;font-size: 6rem;" />
    <h1 class="mb-4 text-2xl font-bold mt-1">
      {{ $t('chat.emptyChatTitle') }}
    </h1>
    <p class="mb-6 text-base text-slate-500">
      {{ $t('chat.emptyChatInfo') }}
    </p>
    <NButton class="button" :loading="loading" @click="handleAddNewGroup">{{ $t('chat.emptyChatButton') }}</NButton>
  </div>
</template>

<style scoped>
.button {
  background-color: #ffffff; /* 设置按钮背景颜色 */
  border: 2px solid #000000; /* 设置边框颜色 */
  border-radius: 40px; /* 设置圆角 */
  width: fit-content;
  height: 50px;
  font-weight: bold !important;
}
.button:hover {
  background-color: #27E093; /* 设置按钮悬停背景颜色 */
  border-bottom: 6px solid #000000; /* 添加加粗的底边 */
}
.button:after {
  font-size: 16px; /* 设置字体大小 */
  font-weight: bold; /* 设置文本为加粗 */
}
</style>
