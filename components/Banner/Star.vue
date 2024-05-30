<template>
  <div class="relative overflow-hidden w-542px">
    <Swiper class="h-full border border-white bg-black relative border-opacity-5" v-bind="SwiperConfig">
      <SwiperSlide v-for="(item, index) in dataList" :key="index">
        <div class="p-10 flex flex-col justify-between h-290px PolySansSlim">
          <div class="text-18px font-semibold w-453px leading-27px">”The chance to be a part of such a supportive and empowering environment is a dream come true.“</div>
          <div class="text-18px text-#ffffff font-semibold absolute left-38px bottom-42px">
            <div>Christina White</div>
            <div class="text-14px text-#BDBDBD mt-6.5px">Filmmaker</div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
const dataList = ref<any[]>([1, 2, 3, 4])

const SwiperConfig = reactive<any>({
  modules: [SwiperAutoplay, SwiperPagination],
  pagination: {
    clickable: true
  }
})
</script>

<style lang="scss"></style>
