<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { ChatboxItem } from './helper'
import { defaultChatBox } from './helper'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { fetchGetChatBoxList } from '@/api/index'
import { useAuthStore } from '@/store'

interface Emit {
  (ev: 'prompt', item: string): void
}

const emit = defineEmits<Emit>()
const router = useRouter()
const authStore = useAuthStore()

const boxData = ref<ChatboxItem[]>([])

/* 查询九宫格内容 */
async function queryChatBox() {
  const res: any = await fetchGetChatBoxList()
  if (res?.data && res?.data.length)
    boxData.value = res?.data

  else
    boxData.value = defaultChatBox
}

onMounted(() => {
  queryChatBox()
})

const siteRobotName = authStore.globalConfig?.siteRobotName || '欢迎来到Pockyt AI shop！'

function handleClick(box) {
  const { appId, prompt, url } = box
  if (url) {
    window.open(url)
    return
  }
  if (appId && appId > 0)
    router.push({ path: '/chat', query: { appId } })

  else
    emit('prompt', prompt)
}

const { isMobile } = useBasicLayout()
</script>

<template>
  <div :class="[isMobile ? 'mt-2' : 'mt-32']" class="rounded-md px-4 py-4 flex flex-col items-start title-margin">
    <!-- 将标题和副标题放在最上方 -->
    <h1 class="mb-1 text-left text-2xl font-bold mt-0 ">
      <!-- 修改这里为 text-left -->
      {{ siteRobotName }}
    </h1>
    <h2 class="mb-4 text-left text-medium text-neutral-600">
      <!-- 添加副标题 -->
      点击以下模型，快速与我对话
    </h2>
    <div class="w-full md:min-w-[450px] mt-9 ">
      <div class="grid  grid-cols-4 gap-4">
        <div v-for="item in boxData" :key="item.id" class="space-y-2 grid-item individual-border">
          <h2 class="text-md text-center flex flex-col items-start">
            <div class="flex items-end" />
            <p
              class=" break-all overflow-hidden font-bold"
              style="font-size: 24px; font-family: 'DM Sans', sans-serif;margin-left: 20px;"
            >
              {{ item.name }}
            </p>
          </h2>
          <div v-for="box in item.childList" :key="box.id" class="space-y-e">
            <div class="py-3 flex flex-col flex items-start rounded " :class="[isMobile ? 'px-2' : 'px-5']">
              <div class="text-left" :style="{ letterSpacing: '-0.5px', fontFamily: 'DM Sans, sans-serif' }">
                {{ box.title }}
              </div>
              <p class="mt-1 text-sm text-neutral-600" style="font-family: 'DM Sans', sans-serif;">
                powered by pockyt AI shop
              </p>
              <div class="flex items-center mt-6 ">
                <img v-if="item.icon" class="icon" :src="item.icon" alt="图标">
                <button class=" runbutton ml-36" @click.stop="handleClick(box)" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="boxData?.length" class="mt-4 text-center text-sm text-neutral-400" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    /* 在小屏幕上显示两列 */
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    /* 在中等屏幕上显示三列 */
  }
}

.grid-item {
  border: 2px solid #000000;
  /* 设置边框颜色 */
  border-radius: 8px;
  /* 设置圆角 */
  padding: 0px;
  /* 设置内边距 */
  background-color: #ffffff;
  /* 设置背景颜色 */
  transition: background-color 0.3s;
  /* 添加过渡效果 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.grid-item:hover {
  background-color: #27E093;
  /* 鼠标悬停时背景颜色变化 */
  border-bottom: 6px solid #000000;
  /* 添加加粗的底边 */
  filter: none;
  /* 确保图标在悬停时不受影响 */
}

.grid-item:hover .icon {
  filter: none;
  /* 确保图标在悬停时不受影响 */
}

.title-margin {
  margin-top: 100px;
  /* 你可以根据需求调整这个值 */
}

.icon {
  width: 40px;
  /* 设置图标宽度 */
  height: 40px;
  /* 设置图标高度 */
  border: 2px solid #000000;
  /* 设置边框颜色 */
  border-radius: 8px;
  /* 设置圆角 */
  filter: none;
  /* 确保图标在悬停时不受影响 */
}

.icon:hover {
  background-color: #ffffff;
  /* 设置按钮背景颜色 */
}

.runbutton {
  background-color: #ffffff;
  /* 设置按钮背景颜色 */
  border: 2px solid #000000;
  /* 设置边框颜色 */
  border-radius: 20px;
  /* 设置圆角 */
  width: 120px;
  height: 40px;
  position: relative;
  /* 使按钮可以使用绝对定位 */
  margin-top: 10px;
}

.runbutton::after {
  content: "RUN";
  /* 按钮后面显示的文本 */
  position: absolute;
  /* 绝对定位 */
  top: 50%;
  /* 垂直居中 */
  left: 50%;
  /* 水平居中 */
  transform: translate(-50%, -50%);
  /* 精确居中对齐 */
  font-size: 16px;
  /* 字体大小可根据需要调整 */
  color: #000;
  /* 字体颜色 */
  font-weight: bold;
  /* 加粗 */
}

.runbutton:hover {
  background-color: #ffffff;
  /* 鼠标悬停时按钮背景颜色变化 */
  border-bottom: 6px solid #000000;
  /* 添加加粗的底边 */
}

/* 新增：调整字体大小和边距 */
@media (max-width: 767px) {
  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 16px;
  }

  .grid-item {
    padding: 5px;
  }

  .runbutton {
    width: 100px;
    height: 30px;
    font-size: 14px;
  }
}
</style>
