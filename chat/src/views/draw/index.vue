<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { NButton, NIcon, NInput, NInputGroup, useMessage } from 'naive-ui'
import { ImagesOutline } from '@vicons/ionicons5'
import { Icon } from '@iconify/vue' // 局部引入 Icon 组件
import { fetchChatDraw, fetchGetAllChatLogDraw, fetchGetChatLogDraw } from '@/api'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { TitleBar } from '@/components/base'
import { useAppStore, useAuthStore } from '@/store'
import OldGridManager from '@/components/common/OldGridManager/index.vue'
import Loading from '@/components/base/Loading.vue'
import type { ResData } from '@/api/types'
const theme = computed(() => appStore.theme)
const authStore = useAuthStore()
const loadingTextColor = computed(() => theme.value === 'dark' ? '#fff' : '#000')
const { isMobile } = useBasicLayout()
const appStore = useAppStore()
const isLogin = computed(() => authStore.isLogin)

const index = ref(0)
const loading = ref(false)
const ms = useMessage()
const mineDrawList: any = ref([])
const allDrawList: any = ref([])

const darkMode = computed(() => appStore.theme === 'dark')

watch(isLogin, async (newVal, oldVal) => {
  if (newVal && !oldVal)
    queryMyDrawList()
})

const exampleList = [
  '超级逼真的未来世界，真实照片，虚幻引擎',
  '帅哥，二次元，赛博朋克风格，精致脸庞',
  '兔子，可爱，高质量，高品质',
]

const imageSizeList = [
  { label: '1024x1024', value: '1024x1024' },
  { label: '1024x1792', value: '1024x1792' },
  { label: '1792x1024', value: '1792x1024' },
]

const qualityList = [
  { label: '标准(2积分)', value: 'standard' },
  { label: '优质(4积分)', value: 'hd' },
]

// const imageNumList = [
//   { label: '1张', value: 1 },
//   { label: '2张', value: 2 },
//   { label: '3张', value: 3 },
//   { label: '4张', value: 4 },
//   { label: '5张', value: 5 },
//   { label: '6张', value: 6 },
//   { label: '7张', value: 7 },
//   { label: '8张', value: 8 },
//   { label: '9张', value: 9 },
// ]

const promptList = ['古风', '二次元', '写实照片', '油画', '水彩画', '油墨画', '黑白雕版画', '雕塑', '3D模型', '手绘草图', '炭笔画', '极简线条画', '电影质感', '机械感']

const form = ref({
  prompt: '',
  n: 1,
  size: '1024x1024',
  quality: 'standard',
})

function updateEx() {
  index.value = index.value + 1 >= exampleList.length ? 0 : index.value + 1
}

async function queryMyDrawList() {
  const res: ResData = await fetchGetChatLogDraw({ model: 'dall-e-3' })
  if (!res.success)
    return
  mineDrawList.value = formatFileInfo(res.data)
}

async function queryAllDrawList() {
  const res: ResData = await fetchGetAllChatLogDraw({ size: 999, rec: 1, model: 'dall-e-3' })
  if (!res.success)
    return ms.error(res.message)
  allDrawList.value = formatFileInfo(res.data.rows)
}

function loadMore() {
}

function usePropmptDraw(str) {
  form.value.prompt = str
}

/* 格式化为组件需要的 */
function formatFileInfo(data: any) {
  if (!data)
    return []
  const res: any = []
  data.forEach((item: any) => {
    const { id, fileInfo, prompt, thumbImg } = item
    let file = null
    if (typeof fileInfo === 'string') {
      try {
        file = JSON.parse(fileInfo)
      }
      catch (error) {
        file = {}
      }
    }
    else {
      file = fileInfo || {}
    }
    const { width, height, cosUrl } = file
    res.push({
      id,
      prompt,
      fullPrompt: prompt,
      fileInfo: {
        thumbImg,
        width,
        height,
        cosUrl,
      },
    })
  })

  return res.filter(t => t.fileInfo && t.fileInfo.width)
}

async function drawImage() {
  if (!form.value.prompt)
    return ms.error('请输入您想要生成的图片描述信息！')
  try {
    loading.value = true
    await fetchChatDraw(form.value)
    ms.success('生成图片成完成、前往我的生成查看图片！')
    await queryMyDrawList()
    loading.value = false
  }
  catch (error) {
    loading.value = false
  }
}
const activeTab = ref('all')
function updateTabs(name: string) {
  activeTab.value = name
  if (name === 'mine')
    queryMyDrawList()
  else if (name === 'all')
    queryAllDrawList()
}

onMounted(() => {
  queryAllDrawList()
})
</script>

<template>
  <!-- <div class="main  h-full overflow-auto bg-custom-background-image bg-repeat-y bg-cover bg-center dark:bg-[#24272e]" :class="isMobile ? ['px-0'] : ['px-10']" :style="{ backgroundImage: !darkMode ? `url('https://seek.yesongit.com/_nuxt/bg.0b4507a9.png')` : '' }"> -->
  <div class="main min-h-screen bg-center dark:bg-[#2F2E34]" :class="[!darkMode ? 'lightBg' : 'darkBg', isMobile ? 'px-3' : 'px-10']">
    <TitleBar title="DALL-E绘画" des="基于DALL-E的绘画、速度较快、同步等待到结束后在我的绘画中可以看到结果！" :padding="isMobile ? 2 : 20" />
    <div :class="isMobile ? ['px-2'] : ['px-20']">
      <!-- <NAlert :show-icon="false" type="success" class="mt-5">
        <span class="text-[#67c23a]">每生成一张图片需要扣除您的两个基础绘画积分、我们建议您输入转为英文！</span>
      </NAlert> -->
      <div class="flex my-5 items-center">
        <b class="flex items-center border border-black rounded-md p-1 text-sm" @click="updateEx">
          <Icon icon="mynaui:refresh-alt" class="mr-2" />  <!-- 使用 Iconify 图标 -->换提示</b>
        <p class="mx-2 text-[#707384] select-none flex-shrink-0">
          Prompt示例：
        </p>
        <p class=" text-[#707384]">
          {{ exampleList[index] }}
        </p>
      </div>

      <NInputGroup>
        <NInput
          v-model:value="form.prompt"
          :disabled="loading"
          clearable
          placeholder="请输入您想要生成的图片描述信息、可以参考上面的示例文字、我们将会对其转为英文绘画、请知悉！"
          style="width: 100%; height: 150px; border: 2px solid black; border-radius: 8px;"
        >
          <template #suffix>
            <NButton
              class="create-image"
              type="success"
              :loading="loading"
              :disabled="loading"

              @click="drawImage"
            >
              <template #icon>
                <NIcon>
                  <ImagesOutline />
                </NIcon>
              </template>
              生成图片
            </NButton>
          </template>
        </ninput>
      </NInputGroup>
      <div class="mt-5 py-4 bg-[#EBF7F1] dark:bg-[#2c2c32] rounded-lg" :class="isMobile ? 'px-0' : 'px-4'">
        <h4 class="text-base mb-2 font-bold">
          参数设置
        </h4>
        <div class="flex items-center">
          <span class="mr-2 inline-block w-20 flex-shrink-0 font-bold">图片尺寸:</span>
          <div>
            <span
              v-for="item in imageSizeList" :key="item.value"
              class="rounded-lg border-2 border-black ml-2 select-none cursor-pointer inline-block mb-2"
              :class="[
                form.size === item.value ? 'bg-[#27E093]' : 'bg-white',
                isMobile ? 'px-1.5 py-0.5' : 'px-3 py-1',

              ]"
              @click="form.size = item.value"
              @mouseover="item.hovered = true"
              @mouseleave="item.hovered = false"
            >
              {{ item.label }}
            </span>
          </div>
        </div>
        <div class="flex items-center">
          <span class="mr-2 inline-block w-20 flex-shrink-0 font-bold">图片质量:</span>
          <div>
            <span
              v-for="item in qualityList" :key="item.value"
              class="rounded-lg border-2 border-black ml-2 select-none cursor-pointer inline-block mb-2"
              :class="[
                form.quality === item.value ? 'bg-[#27E093]' : 'bg-white',
                isMobile ? 'px-1.5 py-0.5' : 'px-2 py-1',

              ]"
              @click="form.quality = item.value"
              @mouseover="item.hovered = true"
              @mouseleave="item.hovered = false"
            >
              {{ item.label }}
            </span>
          </div>
        </div>
        <!-- <div class="flex mt-6 pb-8 border-b border-[#000c3f1a]">
          <span class="mr-2  w-16 flex-shrink-0">图片张数:</span>
          <div>
            <span v-for="item in imageNumList" :key="item.value" class=" py-2 px-5 rounded ml-2 select-none cursor-pointer mb-2 inline-block" :class="item.value === form.n ? ['text-primary', 'bg-[#0d6efd1c]'] : ['bg-[#bfc4d033]']" @click="form.n = item.value">{{ item.label }}</span>
          </div>
        </div> -->
        <div class="flex mt-5">
          <h4 class="text-base mr-2  w-20 flex-shrink-0 font-bold">
            修饰词参考
          </h4>
          <br> <!-- 添加换行符 -->
          <p class="flex-1">
            您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力
          </p>
        </div>
        <div class="flex mt-5 ">
          <h4 class="text-base mr-2  w-20 flex-shrink-0 font-bold">
            图像类型
          </h4>
          <div>
            <span v-for="(item, i) in promptList" :key="item" class="cursor-pointer prompt" @click="form.prompt += form.prompt ? `，${item}` : item">{{ `${item} ${i + 1 === promptList.length ? '' : '、'}` }}</span>
          </div>
        </div>
      </div>
      <div v-if="loading" class="mt-8 pb-10">
        <div class="flex justify-center">
          ----------- 正在生成中、图片越大数量越多所需时间越多、预计25S -----------
        </div>
        <div class="flex flex-wrap mt-8">
          <div v-for="i in form.n" :key="i" class="w-44 h-44 border rounded-md relative  ml-4 mt-4">
            <Loading :text-color="loadingTextColor" :words="['图', '片', '绘', '制', '中']" />
          </div>
          <!-- <img v-for="i in 5" :key="i" class="w-40 rounded ml-4 mt-4" src="https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/16816463869037208e40df8ceb5ff.gif"> -->
        </div>
      </div>
      <div>
        <div class="tabs-container">
          <div class="tabs" />
          <span
            v-for="tab in ['all', 'mine']"
            :key="tab"
            class="tab" :class="[activeTab === tab ? 'active' : '']"
            @click="updateTabs(tab)"
          >
            {{ tab === 'all' ? '公共生成' : '我的生成' }}
          </span>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 'all'" class="min-h-screen">
            <OldGridManager use-propmpt :gap="8" pre-origin :data-list="allDrawList" :scale-width="50" />
          </div>
          <div v-if="activeTab === 'mine'" class="min-h-screen">
            <OldGridManager use-propmpt :gap="8" pre-origin :data-list="mineDrawList" :scale-width="50" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.create-image{
  padding: 0; /* 移除内边距 */
  width: 120px; /* 设置固定宽度 */
  height: 50px; /* 设置固定高度 */
  border: 2px solid black; /* 黑色边框 */
  border-radius: 6rem; /* 圆角 */
  color: black; /* 字体颜色 */
  background-color: #27E093; /* 按钮背景颜色为绿色 */
  transition: background-color 0.3s; /* 背景色过渡效果 */
  font-size: 1rem;
  bottom: -30px; /* 距离底部20px */
  right: 10px; /* 距离右侧20px */
}
.create-image:hover{
  background-color: #27E093!important; /* 悬停时的更深绿色 */
  border-bottom: 6px solid #000000; /* 添加加粗的底边 */
  color:#000000!important; /* 字体颜色 */
}
.prompt:hover {
  color: #27E093;
}
.tabs-container {
    width: 200px;
    display: flex;
    justify-content: center;
    border: 2px solid #000000; /* 大按钮的边框 */
    border-radius: 2rem; /* 圆角 */
    background-color: #ffffff; /* 背景颜色 */
}
.tabs {
    display: flex;
}

.tab {
    border-radius: 2rem; /* 确保 Tab 有圆角 */
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    flex: 1; /* 让 Tab 均分容器宽度 */
    text-align: center; /* 文本居中 */
}

.tab.active {
    background-color: #27E093; /* 选中的背景色 */
    color: rgb(0, 0, 0); /* 选中的字体颜色 */
    font-weight: bold; /* 选中字体加粗 */
    border-bottom: 6px solid #000000; /* 添加加粗的底边 */
}

.tab:hover {
    background-color: #27E093; /* 悬停时背景色 */
}

.tab-content {
    padding: 20px;
}

.min-h-screen {
    min-height: 60vh; /* 可以根据需求调整 */
}
</style>
