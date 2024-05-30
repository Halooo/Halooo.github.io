<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full bg-black overflow-hidden">
        <div class="w-1300px px-50px flex justify-between mx-auto h-screen items-center">
          <img src="~/assets/images/scMeta.png" class="h-120px" />
          <div>
            <div class="text-51px font-medium" style="font-family: PPHattonMedium">
              Entertainment links all,<br />
              future Web3 Hollywood.
            </div>
            <div class="bg-#ffffff h-18px flex w-270px text-black my-9 justify-between" @click="handleLink">
              <div class="uppercase tracking-2.1px ml-2px">Go to SC Meta Website</div>
              <Icon name="mdi:arrow-top-right" class="w-18px h-18px"></Icon>
            </div>
            <div class="text-16px">
              We share the common ideals of Decentralization and Openness with the<br />
              Web3.0 world, that is why we are delicate to be the top brand of<br />
              entertainment Metaverse!
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const handleLink = () => {
  window.open('/scMeta', '_black')
}
</script>
