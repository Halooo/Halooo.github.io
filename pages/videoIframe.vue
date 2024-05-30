<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full bg-black relative">
        <div class="px-50px">
          <div class="max-w-1300px mx-auto py-10">
            <div class="w-full overflow-hidden relative z-10 h-70vh">
              <iframe height="100%" width="100%" frameborder="0" allow="autoplay;fullscreen; picture-in-picture" :src="fileVideoUrl($route.query.url)"></iframe>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const fileVideoUrl = computed(() => {
  return (value: any) => {
    let str = ''
    if (value) {
      if (value.indexOf('vimeo') != -1) str = value.replace('vimeo.com', 'player.vimeo.com/video') + '?autoplay=1'
      else if (value.indexOf('youtube') != -1) str = value.replace('watch?v=', 'embed/')
      else str = value
    } else {
      str = value
    }
    return str
  }
})
</script>
<style lang="scss" scoped></style>
