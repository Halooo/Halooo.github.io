<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full">
        <div class="px-50px">
          <div class="max-w-1300px mx-auto pt-10 flex">
            <div class="PolySansNeutral underline underline-offset-2 cursor-pointer" @click="$router.back()">Back to Thumbnail</div>
          </div>

          <div class="max-w-1300px mx-auto flex justify-center mt-20">
            <img :src="detailInfo.banner_image" alt="" class="rounded-10px h-100" />
          </div>
        </div>

        <div class="relative w-full pt-35">
          <img src="~/assets/images/metaverse/ribbonFill.png" alt="" class="absolute right-0 top-0 z-1" />
          <div class="px-50px">
            <div class="max-w-1300px mx-auto relative z-10">
              <div class="text-lg PolySansNeutral">Kateryna Bielobrova</div>
              <div class="text-96px PolySansNeutral font-bold mt-3 uppercase">{{ detailInfo.name }}</div>
              <div class="PolySansSlim my-8">{{ detailInfo.nfts.length }} artworks</div>
            </div>
          </div>
        </div>

        <!-- NFT -->
        <div class="px-50px">
          <div class="max-w-1300px mx-auto py-10">
            <div class="grid grid-cols-3 gap-5">
              <div v-for="(item, index) in detailInfo.nfts" :key="index" class="space-y-3">
                <div class="rounded-10px overflow-hidden h-250px flex justify-center items-center">
                  <img :src="item.cover_image" alt="" class="w-full h-full object-contain" />
                </div>
                <div class="text-sm PolySansSlim uppercase">{{ item.name }}</div>
              </div>
            </div>
            <!-- <div style="column-count: 3;column-gap: 20px;">
            <div v-for="(item, index) in detailInfo.nfts" :key="index" class="space-y-3 overflow-hidden mb-5">
              <div class="rounded-10px overflow-hidden">
                <img :src="item.cover_image" alt="" class="w-full" />
              </div>
              <div class="text-sm PolySansSlim uppercase">{{ item.name }}</div>
            </div>
          </div> -->
          </div>
          <div class="max-w-1300px mx-auto py-30">
            <div v-if="detailInfo.user" class="flex justify-between space-x-20">
              <div class="space-y-10 w-1/3">
                <div class="w-31 h-31 rounded-full">
                  <img :src="detailInfo.user.profile_avatar && detailInfo.user.profile_avatar[0].file_url" alt="" class="w-full h-full rounded-full object-cover" />
                </div>
                <div class="space-y-10">
                  <div class="PPHattonMedium text-4xl space-y-5">
                    <div>{{ detailInfo.user.first_name }}</div>
                    <div>{{ detailInfo.user.last_name }}</div>
                  </div>
                  <div class="text-sm uppercase">STARS</div>
                </div>
              </div>
              <div class="flex-1">
                <div class="text-lg PolySansSlim">{{ detailInfo.user.introduce }}</div>
                <div class="flex mt-10">
                  <div class="bg-white cursor-pointer px-8 py-4 inline-block" @click="navigateTo(`/starslist/${detailInfo.user.id}`)">
                    <span class="text-lg text-black font-semibold">Connect with Artist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-1300px mx-auto py-20">
            <div class="text-75px PPHattonMedium">More Collection</div>
            <img src="/images/icon/ellipse.png" class="h-20 block" />
            <div class="grid grid-cols-2 gap-x-20 gap-y-10 my-30">
              <div v-for="(item, index) in detailInfo.collection_arr" :key="index" class="px-10 space-y-5">
                <div class="rounded-10px overflow-hidden relative h-0 pb-120%">
                  <img :src="item.banner_image" alt="" class="w-full h-full absolute inset-0 object-cover" />
                </div>
                <div class="flex flex-col justify-center items-center">
                  <div class="text-#ffffff text-lg PolySansSlim font-semibold">Artist Name</div>
                  <div class="text-96px PolySansNeutral font-bold uppercase">{{ item.name }}</div>
                  <div class="bg-white cursor-pointer px-8 py-4 inline-block mt-10" @click="navigateTo(`/collection/${item.id}`)">
                    <span class="text-lg text-black font-semibold">VIEW COLLECTION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-1300px mx-auto flex justify-center py-30">
            <div class="underline underline-offset-8 text-4xl PolySansNeutral font-semibold cursor-pointer" @click="navigateTo('/collection/step2')">Back to Collection List</div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  pageTransition: { name: 'fade-leave', mode: 'out-in' }
})

const route = useRoute()

const detailInfo = reactive({
  banner_image: '',
  collection_arr: [],
  name: '',
  nfts: [],
  user: null,
  user_id: 0
})

const getDetailInfo = async () => {
  const res = await apiindexcollectionDetail(route.params.idx)
  if (process.client) console.log('合集详情', res)
  for (let key in detailInfo) {
    detailInfo[key] = res.data[key]
  }
}
getDetailInfo()
</script>
<style lang="scss"></style>
