<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import type { App } from '../helpter'
import { fetchCollectAppAPI, fetchQueryAppCatsAPI, fetchQueryAppsAPI } from '@/api/appStore'
import { useAppCatStore, useAuthStore, useAppStore } from '@/store'
import type { ResData } from '@/api/types'
import { fetchQueryModelsListAPI } from '@/api/models'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { fetchQueryMenuAPI } from '@/api/config'
import Motion from '@/utils/motion/index'

const emit = defineEmits<Emit>()
const { isMobile } = useBasicLayout()
const authStore = useAuthStore()
const appStore = useAppStore()
const siteRobotName = authStore.globalConfig?.siteRobotName || appStore.getLanguage() == 'en-US' ? 'Welcome to Pockyt AI shop!' : '欢迎来到Pockyt AI Shop!'

const appMenuHeaderTips = computed(() => authStore.globalConfig.appMenuHeaderTips)
const appMenuHeaderBgUrl = computed(() => authStore.globalConfig.appMenuHeaderBgUrl)

const router = useRouter()
const ms = useMessage()
const appCatStore = useAppCatStore()
const keyword = ref('')
const menuList = ref([])

interface Emit {
  (ev: 'run-app', app: App): void
}

interface AppCat {
  id: number
  name: string
  coverImg: string
  des: string
}

const catId = computed(() => appCatStore.catId)
const appList = ref<App[]>([])
const activeList = ref<App[]>([])
const mineApps = computed(() => appCatStore.mineApps)
const catList = ref<AppCat[]>([])
const activeCatId = ref(0)

function isMineApp(app: App) {
  return mineApps.value.some((item: any) => item.appId === app.id)
}

async function queryApps() {
  const res: ResData = await fetchQueryAppsAPI()
  appList.value = res?.data?.rows.map((item: App) => {
    item.loading = false
    return item
  })
  activeList.value = appList.value
}

const list = computed(() => {
  if (keyword.value)
    return appList.value.filter(item => item.name.includes(keyword.value))

  if (activeCatId.value === 0)
    return appList.value
  return appList.value.filter(item => item.catId === activeCatId.value)
})

/* 加入取消收藏 */
async function handleCollect(app: App) {
  app.loading = true
  try {
    const res: ResData = await fetchCollectAppAPI({ appId: app.id })
    ms.success(res.data)
    await appCatStore.queryMineApps()
    app.loading = false
  }
  catch (error) {
    app.loading = false
  }
}

async function handleRunApp(app: App) {
  const res: any = await fetchQueryModelsListAPI()
  const { modelMaps } = res.data
  if (!modelMaps[1])
    return ms.warning('管理员未配置特定应用模型、请联系管理员配置~')

  router.push({ path: '/chat', query: { appId: app.id } })
  // emit('run-app', app)
}

async function queryCats() {
  const res: ResData = await fetchQueryAppCatsAPI()
  const defaultCat = {
    id: 0,
    name: '全部分类',
  }
  catList.value = [defaultCat, ...res?.data?.rows]
}

async function queryMenu() {
  const res: any = await fetchQueryMenuAPI({ menuPlatform: 1 })
  if (!res.success)
    return
  menuList.value = res.data
}

function isShowBtn(path: string) {
  return menuList.value.filter((item: any) => item.menuPath === path).length
}

function handleChangeCatId(id: number) {
  activeCatId.value = id
}

watch(catId, (val) => {
  if (!val)
    activeList.value = appList.value

  else
    activeList.value = appList.value.filter((item: App) => item.catId === val)
})

function handlJumpPath(path: string) {
  router.push(path)
}

onMounted(() => {
  queryCats()
  queryApps()
  queryMenu()
})
</script>

<template>
  <div class="relative flex justify-center ">
    <div class="w-full flex flex-col items-center p-4 lg:p-6  ">
      <div class="mb-2 mt-8 text-center text-3xl font-extrabold text-[#0C0E0C] dark:text-[var(--primary-color-dark)] lg:text-4xl">
        {{ siteRobotName }}
      </div>
      <div class="flex justify-center text-base text-small mb-4 mt-4 text-center text-gray-700 dark:text-gray-300 lg:text-lg">
        {{ appMenuHeaderTips || appStore.getLanguage() == 'en-US' ? 'Explore infinite possibilities and create a smart future with AI!' : '探索无限可能，与AI一同开创智慧未来！' }}
      </div>
      <div class="w-full flex justify-center my-3  " :class="isMobile ? 'space-x-1' : 'space-x-5'">
        <NButton v-if="isShowBtn('/chat')" class="ai-chat " style="font-weight: bold;" @click="handlJumpPath('/chat')">
          <Icon icon="token:chat" class="text-2xl mr-2" />
          {{ $t('aiShop.aiConvo') }}
        </NButton>
        <NButton v-if="isShowBtn('/midjourney')" class="ai-chat" style="font-weight: bold;" @click="handlJumpPath('/midjourney')">
          <Icon icon="mdi:art" class=" text-2xl mr-2 " />
          {{ $t('aiShop.aiPaint') }}
        </NButton>
        <NButton v-if="isShowBtn('/mind')" class="ai-chat" style="font-weight: bold;" @click="handlJumpPath('/mind')">
          <Icon icon="ri:mind-map" class=" text-2xl mr-2 " />
          {{ $t('aiShop.mindMap') }}
        </NButton>
      </div>
      <div class="flex justify-center items-center mt-8">
        <div class="button-wrapper">
          <el-button
            v-for="(item, index) in catList"
            :key="index"
            class=" fenlei"
            :class="{ active: activeCatId === item.id }"
            style="font-weight: bold;"
            type="success"
            @click="handleChangeCatId(item.id)"
          >
            {{ item.name }}
          </el-button>
        </div>
      </div>
      <Motion :delay="0" :y="50" :duration="350">
        <div class=" flex flex-wrap" :class="isMobile ? 'px-4' : 'pl-0'">
          <div class="flex flex-wrap justify-center">
            <div v-for="item in list" :key="item.id" class="custom-card w-1/5 mt-10 p-2 m-2">
              <div class="w-full flex items-center">
                <span class="w-16 h-16 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]">
                  <img :src="item.coverImg" class="w-14 h-14 mb-1" alt="">
                </span>
                <span class="css-0 mb-2 line-clamp-1 break-all text-lg font-semibold tracking-wide text-[#333] dark:text-[#ffffff]">{{ item.name }}</span>
              </div>

              <p class="h-[100px] font-bold ml-2 text-xs mx-1 mt-1">
                {{ item.des }}
              </p>

              <div class="w-full flex justify-between mt-1">
                <NButton class="join flex items-center justify-center" size="tiny" ghost :disabled="item.loading" @click.stop="handleCollect(item)">
                  <template #icon>
                    <SvgIcon :icon=" isMineApp(item) ? 'iconamoon:sign-minus-bold' : 'mi:add'" class="text-base" />
                  </template>
                  <span class="ml-[-20px] font-bold">
                    {{ isMineApp(item) ? '取消收藏' : '加入个人工作台' }}</span>
                </NButton>
                <NButton class="run-icon" size="tiny" ghost @click.stop="handleRunApp(item)">
                  <span class="ml-[0px] font-bold text-lg">
                    Run
                  </span>
                </NButton>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  </div>
</template>

<style lang="less">
.custom-card{
  min-width: 280px;
  max-width: 280px;
	transition: all 0.3s;
  border: 2px solid black; /* 黑色边框 */
  border-radius: 1rem; /* 圆角 */
  display: flex;
  flex-direction: column;

	.join{
    margin-left:20px;
    width: 100px;
    height: 30px;
    margin-top: 50px;
    background-color: #ffffff; /* 按钮背景颜色为白色 */
    transition: all .3s;
    border: 2px solid black; /* 黑色边框 */
    border-radius: 1rem; /* 圆角 */
		opacity: 1;
    &:hover{
      background-color: #ffffff; /* 按钮背景颜色为白色 */
			transform: scale(1.2);
      border-bottom: 6px solid #000000; /* 添加加粗的底边 */
		}

  }
	&:hover{
    background-color: #27E093;
    box-shadow: 0 6px 32px #04343014;
    border-bottom: 6px solid #000000; /* 添加加粗的底边 */
	}

	.run-icon{
    content: "Run";
    margin-right: 20px;
    margin-top: 50px;
    width: 70px;
    height: 30px;
    background-color: #ffffff; /* 按钮背景颜色为白色 */
    border: 2px solid black; /* 黑色边框 */
    border-radius: 1rem; /* 圆角 */
		opacity: 1;
		transition: all .3s;

		&:hover{
      background-color: #ffffff; /* 按钮背景颜色为白色 */
			transform: scale(1.2);
      border-bottom: 6px solid #000000; /* 添加加粗的底边 */
		}
	}
}
.ai-chat{
  border: 2px solid black; /* 黑色边框 */
  border-radius: 6rem; /* 圆角 */
  color: black; /* 字体颜色 */
  background-color: #ffffff; /* 按钮背景颜色为绿色 */
  transition: background-color 0.3s; /* 背景色过渡效果 */
}
.ai-chat:hover{
    color: #000000!important;
    background-color: #27E093!important;
    box-shadow: 0 6px 32px #04343014;
		transform: scale(1.05);
    border-bottom: 6px solid #000000; /* 添加加粗的底边 */
}

.button-wrapper{
    width: 600px;
    height: 42px;
    display: flex;
    justify-content: center;
    border: 2px solid #000000; /* 大按钮的边框 */
    border-radius: 2rem; /* 圆角 */
    background-color: #ffffff; /* 背景颜色 */
    border-bottom: 4px solid #000000; /* 添加加粗的底边 */
    

}
.fenlei {
    display: flex;
    height: 40px; /* 按钮高度 */
    border-radius: 2rem; /* 确保 Tab 有圆角 */
    padding: 10px 20px;
    flex: 1; /* 让 Tab 均分容器宽度 */
    text-align: center; /* 文本居中 */
    cursor: pointer; /* 鼠标指针 */
    outline: none !important; /* 去掉按钮的轮廓 */
    align-items: center;
    justify-content: center;
}
.fenlei.active {
  font-weight: bold; /* 选中字体加粗 */
  color:#000000!important; /* 选中的字体颜色 */
  background-color: #27E093 !important; /* 按钮背景颜色为绿色 */
  border-bottom: 6px solid #000000; /* 添加加粗的底边 */
  outline: none !important; /* 去掉按钮的轮廓 */
}
.fenlei:hover {
    color:#000000!important;
    background-color: #27E093!important; /* 悬停时背景色 */
    border-bottom: 6px solid #000000; /* 添加加粗的底边 */
}
</style>
