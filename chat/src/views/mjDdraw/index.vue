<script setup lang="ts">
import { computed, h, onMounted, ref } from 'vue'
import { NAlert, NAvatar, NButton, NEllipsis, NEmpty, NIcon, NImage, NInput, NInputGroup, NTabPane, NTabs, NTooltip, useMessage, useNotification } from 'naive-ui'
import { ImagesOutline } from '@vicons/ionicons5'
import { Search, UpdateRotation, ZoomIn } from '@icon-park/vue-next'
import { fetchGetAllChatLogDraw, fetchGetChatLogDraw } from '@/api'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { TitleBar } from '@/components/base'
import { useAppStore } from '@/store'
import type { ResData } from '@/api/types'
import { fetchMjDtawAPI, fetchUpscaleSingleImgAPI, fetchVariationSingleImgAPI } from '@/api/mjDraw'

const notification = useNotification()
const { isMobile } = useBasicLayout()
const appStore = useAppStore()

const index = ref(0)
const loading = ref(false)
const ms = useMessage()
const mineDrawList: any = ref([])
const allDrawList: any = ref([])
const imagesRefs = ref<any>({})
const darkMode = computed(() => appStore.theme === 'dark')

const drawSize = ref(4)

const exampleList = appStore.getLanguage() == 'en-US' ? [
  'Super realistic future world, real photos, Unreal Engine',
  'Handsome guy, two-dimensional, cyberpunk style, exquisite face',
  'Rabbit, cute, high quality, high quality',
] : [
  '超级逼真的未来世界，真实照片，虚幻引擎',
  '帅哥，二次元，赛博朋克风格，精致脸庞',
  '兔子，可爱，高质量，高品质',
]

const promptList = appStore.getLanguage() == 'en-US' ? ['Ancient style', 'Second dimension', 'Realistic photo', 'Oil painting', 'Watercolor painting', 'Ink painting', 'Black and white engraving', 'Sculpture', '3D model', 'Hand-drawn sketch', 'Charcoal Stroke', 'Minimalist line drawing', 'Film texture', 'Mechanical feel'] : ['古风', '二次元', '写实照片', '油画', '水彩画', '油墨画', '黑白雕版画', '雕塑', '3D模型', '手绘草图', '炭笔画', '极简线条画', '电影质感', '机械感']

const form = ref({
  prompt: '',
})

function updateEx() {
  index.value = index.value + 1 >= exampleList.length ? 0 : index.value + 1
}

async function queryMyDrawList() {
  const res: ResData = await fetchGetChatLogDraw({ model: 'mj' })
  if (!res.success)
    return
  mineDrawList.value = res.data
}

async function queryAllDrawList() {
  const res: ResData = await fetchGetAllChatLogDraw({ size: 999, rec: 1, model: 'mj' })
  if (!res.success)
    return ms.error(res.message)
  allDrawList.value = res.data.rows
}

function hasChinese(str: string) {
  return /[\u4E00-\u9FA5]+/g.test(str)
}

function hasAllChinese(str: string) {
  return /^[\u4E00-\u9FA5]+$/.test(str)
}

/* 绘制图片 */
async function drawImage() {
  if (!form.value.prompt)
    return appStore.getLanguage() == 'en-US' ? ms.error('Please enter the image description information you want to generate, as detailed as possible, the effect may be better!') : ms.error('请输入您想要生成的图片描述信息、尽可能详细可能效果会更好！')
  // const isHas = hasChinese(form.value.prompt)
  // const isAll = hasAllChinese(form.value.prompt)
  // if (isAll || isHas)
  //   return ms.error('描述词请使用纯英文、否则可能造成无法识别、请先翻译为英文再进行绘制可获得更好的体验！')

  try {
    notification.success({
      title: appStore.getLanguage() == 'en-US' ? 'The picture starts to be drawn! ' : '图片开始绘制了！',
      duration: 10000,
      content: appStore.getLanguage() == 'en-US' ? 'Currently, some pictures have started to be drawn. It will take about 70-90 seconds to draw pictures. Please wait patiently! ' : '当前有图片已经开始进行绘制了、绘制图片时间大约70-90S、请您耐心等待！',
    })
    drawSize.value = 4
    loading.value = true
    await fetchMjDtawAPI(form.value)
    notification.success({
      title: appStore.getLanguage() == 'en-US' ? 'Picture drawing completed' : '图片绘制完成',
      duration: 10000,
      content: appStore.getLanguage() == 'en-US' ? 'Your picture has been drawn, go and take a look, go to my generation to view it! ' : '您的图片已经绘制完成了、快去看看吧、前往我的生成中即可查看！',
    })
    await queryMyDrawList()
    loading.value = false
  }
  catch (error) {
    loading.value = false
  }
}

/* 变换单张图片 */
async function handlervariationSingleImg(item: any, orderId: number) {
  const { message_id } = item
  if (loading.value) {
    return notification.warning({
      title: appStore.getLanguage() == 'en-US' ? 'There is already a drawing in progress' : '已有进行中的绘制',
      duration: 3000,
      content: appStore.getLanguage() == 'en-US' ? 'There are currently pictures being drawn, please wait patiently. Frequent requests may limit your account for a short time! ' : '当前已有图片正在绘制中、请耐心等待、频繁请求可能会短时间限制您的账号！',
    })
  }

  if (!message_id)
    return appStore.getLanguage() == 'en-US' ? ms.error('The current picture does not support variant drawing!') : ms.error('当前图片不支持变体绘制！')
  const params = { message_id, orderId }
  try {
    drawSize.value = 4
    form.value.prompt = appStore.getLanguage() == 'en-US' ? 'The picture is being rendered...' : '正在对图片进行变体绘制中......'
    loading.value = true
    notification.success({
      title: appStore.getLanguage() == 'en-US' ? 'The picture begins to be morphed and drawn! ' : '图片开始变体绘制了！',
      duration: 10000,
      content: appStore.getLanguage() == 'en-US' ? 'The current picture has started to be drawn with variations. It will take about 70-90 seconds to draw the picture. Please wait patiently! ' : '当前图片已经开始进行变体绘制了、绘制图片时间大约70-90S、请您耐心等待！',
    })
    await fetchVariationSingleImgAPI(params)
    form.value.prompt = ''
    await queryMyDrawList()
    loading.value = false
  }
  catch (error) {
    form.value.prompt = ''
    loading.value = false
    notification.error({
      title: appStore.getLanguage() == 'en-US' ? 'Picture variant drawing failed! ' : '图片变体绘制失败了！',
      duration: 10000,
      content: appStore.getLanguage() == 'en-US' ? 'Your image variant drawing failed, please take a break and try again! ' : '您的图片变体绘制失败了、请休息片刻再试一次吧！',
    })
  }
}

/* 放大单张图片 */
async function handlerUpscaleImg(item: any, orderId: number) {
  const { message_id } = item
  if (loading.value) {
    return notification.warning({
      title: appStore.getLanguage() == 'en-US' ? 'There is already a drawing in progress' : '已有进行中的绘制',
      duration: 3000,
      content: appStore.getLanguage() == 'en-US' ? 'There are pictures currently being drawn, please wait patiently. Frequent requests may limit your account for a short time! ' : '当前有图片正在绘制中、请耐心等待、频繁请求可能会短时间限制您的账号！',
    })
  }

  if (!message_id)
    return appStore.getLanguage() == 'en-US' ? ms.error('The current picture does not support independent drawing!') : ms.error('当前图片不支持单独绘制！')
  const params = { message_id, orderId }
  try {
    notification.success({
      title: appStore.getLanguage() == 'en-US' ? 'Picture enlarged and drawn' : '图片放大绘制中',
      duration: 5000,
      content: appStore.getLanguage() == 'en-US' ? 'The current picture has begun to be enlarged and drawn. The estimated time is 10-20S. Please wait patiently! ' : '当前图片已经开始进行放大绘制了、预计时间10-20S、请耐心等待！',
    })
    drawSize.value = 1
    form.value.prompt = appStore.getLanguage() == 'en-US' ? 'Details are being drawn on a single picture...' : '正在对单张图片进行细节绘制中......'
    loading.value = true
    await fetchUpscaleSingleImgAPI(params)
    form.value.prompt = ''
    await queryMyDrawList()
    loading.value = false
    notification.success({
      title: appStore.getLanguage() == 'en-US' ? 'Picture enlargement and drawing completed' : '图片放大绘制完成',
      duration: 10000,
      content: appStore.getLanguage() == 'en-US' ? 'Your image enlargement operation has been completed, go and take a look, go to my generation to view it! ' : '您的图片放大操作已经绘制完成了、快去看看吧、前往我的生成中即可查看！',
    })
  }
  catch (error) {
    form.value.prompt = ''
    loading.value = false
    notification.error({
      title: appStore.getLanguage() == 'en-US' ? 'Picture enlargement failed! ' : '图片放大失败了！',
      duration: 10000,
      content: appStore.getLanguage() == 'en-US' ? 'Your picture failed to enlarge, please take a break and try again! ' : '您的图片放大失败了、请休息片刻再试一次吧！',
    })
  }
}

function tips() {
  notification.create({
    title: appStore.getLanguage() == 'en-US' ? 'Free and open to experience! ' : '免费开放体验中！',
    duration: 0,
    content: appStore.getLanguage() == 'en-US' ? 'Free trial is open today. All users can try three quotas for free. There is a quota for generating pictures and picture variations. We offer free enlargement of single pictures. Please do not use sensitive words, otherwise it may trigger risks. The control mechanism directly bans your account! ' : '今日开放免费体验、所有用户均可免费体验三个额度、对于生成图片和对图片变体是需要扣除额度的、对于放大单张图片我们是免费的、请勿使用敏感词、否则可能触发风控机制直接封禁您的账号！',
    meta: '2023-5-11',
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: 'https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/1683784443724logo.png',
      }),
  })
}

function updateTabs(name: string) {
  name === 'mine' && queryMyDrawList()
  name === 'all' && queryAllDrawList()
}

function handlerPreImg(id: number) {
  imagesRefs.value[id].click()
}

function setItemRefs(el, item) {
  imagesRefs.value[item.id] = el
}

onMounted(() => {
  queryAllDrawList()
})
</script>

<template>
  <div class="main min-h-screen bg-center dark:bg-[#2F2E34]" :class="[!darkMode ? 'lightBg' : 'darkBg', isMobile ? 'px-3' : 'px-10']">
    <TitleBar :title="$t('mjDdraw.aiProf')" :des="$t('mjDdraw.aiProfDes')" :padding="isMobile ? 2 : 20" />
    <div :class="isMobile ? ['px-2'] : ['px-20']" class="pb-5">
      <NAlert :show-icon="false" type="success" class="mt-5">
        <span class="text-[#67c23a]">{{ $t('mjDdraw.mjPaintCost') }}</span>
      </NAlert>
      <div class="flex my-5">
        <b class="text-primary cursor-pointer select-none flex-shrink-0" @click="updateEx">{{$t('mjDdraw.changeEx')}}</b>
        <p class="mx-2 text-[#707384] select-none flex-shrink-0">
          {{$t('mjDdraw.prompEx')}} ：
        </p>
        <p class=" text-[#707384]">
          {{ exampleList[index] }}
        </p>
      </div>

      <NInputGroup>
        <NInput v-model:value="form.prompt" size="large" clearable :disabled="loading" :placeholder="$t('mjDdraw.placeholderPrompt')" @keyup.enter="drawImage" />
        <NButton type="success" size="large" :loading="loading" :disabled="loading" @click="drawImage">
          <template #icon>
            <NIcon>
              <ImagesOutline />
            </NIcon>
          </template>
          {{ $t('mjDdraw.genPic') }}
        </NButton>
      </NInputGroup>
      <div class="mt-5 p-4 bg-[#e7eaf380] dark:bg-[#2c2c32] rounded-lg">
        <div class="flex">
          <h4 class="text-base mr-2  w-20 flex-shrink-0">
            {{ $t('mjDdraw.modifierRef') }}
          </h4>
          <p class="text-[#707384]">
            {{ $t('mjDdraw.modifierDes') }}
          </p>
        </div>
        <div class="flex mt-5 ">
          <h4 class="text-base mr-2  w-20 flex-shrink-0">
            {{$t('mjDdraw.imageType')}}
          </h4>
          <div>
            <span v-for="(item, i) in promptList" :key="item" class="cursor-pointer hover:text-primary" @click="form.prompt += form.prompt ? `，${item}` : item">{{ `${item} ${i + 1 === promptList.length ? '' : '、'}` }}</span>
          </div>
        </div>
      </div>
      <div v-if="loading" class="mt-8 pb-10">
        <div class="flex justify-center">
          ----------- {{$t('mjDdraw.timePrompt')}} -----------
        </div>
        <div class="flex flex-wrap mt-8">
          <img v-for="i in drawSize" :key="i" class="w-60 rounded ml-1 mt-1" src="https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/16816463869037208e40df8ceb5ff.gif">
        </div>
      </div>
      <NTabs type="line" animated class="mt-5" @update:value="updateTabs">
        <NTabPane name="all" :tab="$t('mjDdraw.publicGen')">
          <div v-if="allDrawList.length" class="flex flex-wrap mt-8" :class="[isMobile ? 'justify-center' : '']">
            <div v-for="item in allDrawList" :key="item.thumbImg" class="rounded ml-3 mt-3 flex flex-col" :class="[isMobile ? 'w-full items-center ml-0' : 'w-64']">
              <NImage
                :src="item.thumbImg"
                lazy
                :preview-src="item.answer"
              />
              <NEllipsis expand-trigger="click" line-clamp="1" :tooltip="true">
                {{ item.prompt }}
              </NEllipsis>
            </div>
          </div>
          <NEmpty v-else size="huge" class="mt-20" :description="$t('mjDdraw.empty')" />
        </NTabPane>
        <NTabPane name="mine" :tab="$t('mjDdraw.gen')">
          <div v-if="mineDrawList.length" class="flex flex-wrap mt-8 " :class="[isMobile ? 'justify-center' : '']">
            <div v-for="(item) in mineDrawList" :key="item.thumbImg" class="w-64 rounded ml-3 mt-3 relative img-container" :class="[isMobile ? 'w-full' : 'w-64']">
              <div v-if="item.isGroup" class="parent absolute">
                <div v-for="orderId in 4" :key="orderId" class="child">
                  <NTooltip trigger="hover">
                    <template #trigger>
                      <Search theme="multi-color" class="icon" size="28" :fill="['#ebebeb', '#2cb976', '#FFF', '#1fc0ee']" @click="handlerUpscaleImg(item, orderId)" />
                    </template>
                    {{ $t('mjDdraw.freeDraw') }}
                  </NTooltip>
                  <NTooltip trigger="hover">
                    <template #trigger>
                      <UpdateRotation theme="multi-color" class="icon ml-3" size="24" :fill="['#ebebeb', '#2cb976', '#FFF', '#1fc0ee']" @click="handlervariationSingleImg(item, orderId)" />
                    </template>
                    {{ $t('mjDdraw.variations') }}
                  </NTooltip>
                </div>
                <div class="circle">
                  <NTooltip trigger="hover">
                    <template #trigger>
                      <ZoomIn theme="multi-color" size="24" class="zoom" :fill="['#333', '#2F88FF', '#FFF', '#43CCF8']" @click="handlerPreImg(item.id)" />
                    </template>
                    {{ $t('mjDdraw.previewLarge') }}
                  </NTooltip>
                </div>
              </div>
              <NImage
                :ref="(el) => setItemRefs(el, item)"
                class="w-full flex justify-center"
                :src="item.thumbImg"
                :preview-src="item.answer"
                lazy
              />
              <NEllipsis line-clamp="1" :tooltip="true">
                {{ item.prompt }}
              </NEllipsis>
            </div>
          </div>
          <NEmpty v-else size="huge" class="mt-20" :description="$t('mjDdraw.empty')" />
        </NTabPane>
      </NTabs>
    </div>
  </div>
</template>

<style lang="less">
.img-container{
  &:hover{
    .parent{
      opacity: 1;
    }
  }
}
.parent{
  user-select: none;
  transition: all .18s;
  width: 100%;
  opacity: 1;
  height: calc(100% - 35px);
  display: flex;
  flex-wrap: wrap;
  .child{
    width: 50%;
    height: 50%;
    outline: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      .icon{
        opacity: 1;
      }
    }
    .icon{
      transition: all .3s;
      opacity: 0;
      &:hover{
        cursor: pointer;
        transform: scale(1.5);
      }
    }
 }
 .circle{
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e8f1f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .zoom{
		transition: all .3s;
    &:hover{
      cursor: pointer;
      transform: scale(1.5);
    }
  }
 }
}
</style>
