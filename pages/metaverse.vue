<template>
  <div>
    <NuxtLayout name="home">
      <div class="w-full">
        <div class="px-50px">
          <div class="max-w-1300px mx-auto py-50 flex justify-center">
            <img src="~/assets/images/metaverse/metaverse-intro.png" alt="" class="w-500px" />
          </div>

          <div class="max-w-1300px mx-auto mt-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div class="space-y-10">
                <!-- <img src="~/assets/images/metaverse/nftCollection.png" alt="" class="w-full h-500px object-cover" />
                <div class="space-y-3">
                  <div class="PPHattonMedium text-5xl">NFT Collections</div>
                  <div class="text-lg PolySansSlim capitalize">
                    {{ statistic.collection_len }} NFT Collections <br />
                    from {{ statistic.artist_len }} Artists
                  </div>
                </div>
                <button disabled class="btn gradient-btn">
                  <div>Coming Soon</div>
                </button> -->
                <!-- <div class="btn gradient-btn" @click="navigateTo('/collection/step1')">
                <div>Explore NFTs Collection</div>
              </div> -->
              </div>
              <div class="space-y-10">
                <!-- <div class="relative w-full">
                  <img src="~/assets/images/metaverse/Footage.png" alt="" class="w-full h-500px object-cover" />
                  <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center"> -->
                <!-- <div class="text-60px PolySansSlim">FOOTAGE</div> -->
                <!-- <img src="https://www.starscollective.com/assets/images/stars/Asset.png" alt="" class="h-10" />
                  </div>
                </div> -->
                <!-- <div class="space-y-3">
                  <div class="PPHattonMedium text-5xl">Web 3 Platform</div>
                  <div class="text-lg PolySansSlim capitalize">
                    Footage is a Web3 film Metaverse and an open community <br />
                    Connecting creators, curators, and enthusiasts.
                  </div>
                </div>
                <button class="btn gradient-btn" @click="navigateTo('/footage')">
                  <div>Enter F00TAGE</div>
                </button> -->
              </div>
            </div>
          </div>

          <div class="max-w-1300px mx-auto mt-10 pt-20 relative">
            <div class="flex justify-end">
              <img src="~/assets/images/metaverse/comin-soon.png" alt="" class="h-31" />
            </div>
            <img src="https://www.starscollective.com/assets/images/gif/line2.gif" alt="" class="w-full block mx-auto" />
          </div>
        </div>
        <div class="px-50px pt-60 pb-30">
          <div class="max-w-1300px mx-auto relative z-100">
            <div class="w-full flex justify-between items-center PPHattonMedium">
              <div class="flex items-center cursor-pointer" @click="navigateTo('/starsMovies')">
                <img src="/images/icon/Chevron_Left1.png" alt="" class="w-12" />
                <div class="left-btn text-35px">Cross-Medium Content</div>
              </div>
              <div class="flex items-center cursor-pointer" @click="navigateTo('/merch')">
                <div class="right-btn text-35px">Merch</div>
                <img src="/images/icon/Chevron_Right2.png" alt="" class="w-12" />
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const statistic = reactive({
  collection_len: 0,
  artist_len: 0
})
const getapiindexcollectionStatistics = async () => {
  const { data } = await apiindexcollectionStatistics()
  if (process.client) console.log('合计统计', data)
  statistic.collection_len = data.value.data.collection_len
  statistic.artist_len = data.value.data.artist_len
}
getapiindexcollectionStatistics()
</script>
<style lang="scss" scoped>
:deep(video) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.left-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #2b38ea 0%, #7b61ff 44.63%, #aecefb 100.81%);
}
.right-btn {
  color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
}
</style>
