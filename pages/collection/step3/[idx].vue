<template>
  <div class="flex-1 relative px-50px w-full pt-20">
    <img
      src="~/assets/images/metaverse/colored-ribbon.png"
      alt=""
      class="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 ribbon1"
      :class="[{ 'opacity-0': collectionStore.getCollectionAnimation }]"
    />
    <img
      src="~/assets/images/metaverse/colored-ribbon-fill.png"
      alt=""
      class="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 ribbon2"
      :class="[{ 'opacity-0': !collectionStore.getCollectionAnimation }]"
    />

    <div class="absolute rounded-10px top-1/2 left-1/2 -translate-1/2 w-full z-10 flex justify-center items-center">
      <img :src="info.banner_image" alt="" class="h-100 info-image opacity-0" />
    </div>

    <div class="max-w-1300px mx-auto relative z-30">
      <div class="info-body" :class="[{ 'opacity-0': collectionStore.getCollectionAnimation }]">
        <div class="text-#ffffff text-lg PolySansSlim font-semibold">{{ info.user.first_name }} {{ info.user.last_name }}</div>
        <div class="text-96px PolySansNeutral font-bold mt-3">{{ info.name }}</div>
        <div class="PolySansSlim my-8">{{ info.nfts.length }} artworks</div>
        <div class="bg-white cursor-pointer px-8 py-4 inline-block" @click="navigateTo(`/collection/${info.id}`)">
          <span class="text-lg text-black font-semibold">VIEW COLLECTION</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'

const info = reactive({
  banner_image: '',
  name: '',
  nfts: [],
  id: 0,
  user: {
    first_name: '',
    last_name: ''
  }
})

const emits = defineEmits(['animationEnd'])

const route = useRoute()
const collectionStore = useCollectionPinia()

const getDetailInfo = async () => {
  const res = await apiindexcollectionDetail(route.params.idx)
  if (process.client) console.log('合集详情', res)
  for (let key in info) {
    info[key] = res.data[key]
  }
}

getDetailInfo()

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    if (collectionStore.getCollectionAnimation) {
      const tl = gsap.timeline()
      tl.fromTo('.info-image', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1.2, duration: 1, onComplete: (e) => emits('animationEnd') })
      tl.fromTo('.info-image', { scale: 1.2 }, { scale: 1, duration: 1, delay: 1 })
      tl.fromTo('.ribbon1', { opacity: 0 }, { opacity: 1, duration: 1 }, '<')
      tl.fromTo('.ribbon2', { opacity: 1 }, { opacity: 0, duration: 1 }, '<')
      tl.fromTo('.info-body', { opacity: 0 }, { opacity: 1, duration: 1 }, '<')
    } else {
      gsap.fromTo('.info-image', { opacity: 0 }, { opacity: 1, duration: 0.5 })
    }
  }, 600)
})
</script>
<style lang="scss"></style>
