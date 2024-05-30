<template>
  <div ref="mentorRef" class="bg-black pt-170px pb-15 overflow-hidden">
    <div class="px-50px">
      <div class="max-w-1300px mx-auto flex overflow-hidden">
        <div class="w-1/2 mt-100px">
          <div class="text-77px PPHattonMedium">Our<br />Mentors</div>
          <img src="/images/icon/ellipse.png" class="h-15 block" />
          <div class="text-18px leading-27px mt-10 mentor_text whitespace-nowrap">
            We understand how critical it is for young filmmakers of<br />diverse backgrounds to have the guidance and mentorship<br />of renowned professionals who’ve walked their path. That’s<br />why
            we’ve assembled a community of world-famous<br />directors and producers to collaborate and curate<br />opportunities for our young talents and their film projects.
          </div>

          <div class="btn gradient-btn mt-10" @click="navigateTo('/mentors')">
            <div class="">View All Mentors</div>
          </div>
        </div>
        <div class="w-1/2 flex justify-end mb-145px relative">
          <!--  :style="{ top: imageTop + 'px' }"  -->
          <!-- <img class="w-280px h-388px object-cover absolute top-1/2 left-0 -translate-y-1/2 bg-card opacity-0" :src="mentorsImage" /> -->
          <div class="w-300px overflow-hidden mentor_name" @mouseleave="imageOpacity = 0">
            <div class="w-300px text-14px text-#616161">*Names are listed in alphabetical order</div>
            <!-- @mouseenter="handleMouseEnter(index, item.photo_image, $event)" -->
            <div v-for="(item, index) in mentorsList" :key="index" class="mt-4 cursor-pointer mentors-text" @click="navigateTo('/mentors')">
              <div class="font-medium text-26px leading-9 whitespace-nowrap PPHattonMedium">{{ item.first_name }} {{ item.last_name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
const starAnimate = ref<boolean>(false)
const mentorRef = ref<any>(null)
const imageTop = ref<number>(0)
const imageOpacity = ref<number>(0)
const mentorsImage = ref<string>('')

const mentorsList = ref<any[]>([
  { first_name: 'Jon', last_name: 'M. Chu' },
  { first_name: 'Donna', last_name: 'Gigliotti' },
  { first_name: 'Sanping', last_name: 'Han' },
  { first_name: 'Eric', last_name: 'Heumann' },
  { first_name: 'Xiaoming', last_name: 'Huang' },
  { first_name: 'Liming', last_name: 'Ke' },
  { first_name: 'Chris', last_name: 'Lee' },
  // { first_name: 'Jonathan', last_name: 'Liebesman' },
  { first_name: 'Anthony', last_name: 'McCarten' },
  { first_name: 'Rob', last_name: 'Minkoff' },
  { first_name: 'Gianni', last_name: 'Nunnari' },
  { first_name: 'Sam', last_name: 'Raimi' },
  { first_name: 'Alan', last_name: 'Taylor' },
  { first_name: 'Patrick', last_name: 'Wachsberger' },
  { first_name: 'Paula', last_name: 'Wagner' }
])

const handleMouseEnter = (_index, _image, e) => {
  mentorsImage.value = ''
  imageTop.value = e.target.clientHeight * _index
  setTimeout(() => {
    mentorsImage.value = _image
  }, 100)
  gsap.fromTo('.bg-card', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'none' })
}

watchEffect(() => {
  if (starAnimate.value) {
    AnimateEffect()
  }
})

// 动画效果
const AnimateEffect = () => {
  gsap.fromTo('.mentor_text', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2.5 })
  gsap.fromTo('.btn gradient-btn', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2.5 })
  gsap.fromTo('.mentor_name', { translateY: '-50%', opacity: 0 }, { translateY: 0, opacity: 1, duration: 2.5 })
}

const getMentorList = async () => {
  const res = await apiIndexMentorList()
  mentorsList.value = res.data
}
// getMentorList()

onMounted(() => {
  nextTick(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => (starAnimate.value = entry.isIntersecting)), { threshold: 0.3 })
    mentorRef.value && io.observe(mentorRef.value)
  })
})
</script>
<style lang="scss" scoped>
.mentors-text {
  transition: all 0.5s ease;
  &:hover {
    color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(270deg, #ff00d6 0%, #7b61ff 70.88%, #7193ea 96.61%);
  }
}
</style>
