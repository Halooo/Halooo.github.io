<template>
  <div>
    <NuxtLayout>
      <Header @update:anchor-skip="anchorSkip"></Header>
      <div id="scroll_top" class="w-full bg-black">
        <div class="h-screen">
          <BannerCarousel></BannerCarousel>
        </div>
        <HomeStarlight></HomeStarlight>
        <!-- <HomeBusiness id="entertainment"></HomeBusiness> -->
        <HomeMovies></HomeMovies>
        <HomeMentors></HomeMentors>
        <HomeStars></HomeStars>
      </div>

      <HomeCross></HomeCross>
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
// 当前页使用描点
const anchorSkip = (_url: string) => {
  // document.querySelector('#' + _url).scrollIntoView()
}

// onMounted(() => {
//   nextTick(() => {
//     setTimeout(() => {
//       //跨页面使用描点 .
//       if (route.query && route.query.value) document.getElementById(`${route.query.value}`).scrollIntoView()
//     }, 1000)
//   })
// })

// const appConfig = useAppConfig()
// if (process.client) {
//   console.log(appConfig)
//   console.log(import.meta.env)
// }
// const user_pinia = useUserPinia()
// console.log(user_pinia.getToken)
</script>
<style lang="scss" scoped></style>
