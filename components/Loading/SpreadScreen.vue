<template>
  <div class="overflow-hidden w-full h-full">
    <div class="w-full h-full rectangle overflow-hidden relative">
      <div class="w-full bg-[#FFBC02] rectangle-item item1 PushUp absolute bottom-[16px]"></div>
      <div class="w-full bg-[#FF3023] rectangle-item item2 PushUp absolute bottom-[8px]"></div>
      <div class="w-full bg-[#010FFA] rectangle-item item3 PushUp1 absolute bottom-0"></div>
      <div class="w-full bg-[#F065BF] rectangle-item item4 PushUp2 absolute bottom-0 z-10"></div>
      <div class="w-full bg-[#5443E2] rectangle-item item5 PushUp2 absolute bottom-0 z-10"></div>

      <!-- 头部 -->
      <div class="w-full bg-[#F065BF] rectangle-item item6 absolute top-0 opacity-0 DropDownPink z-20"></div>
      <div class="w-full bg-[#5443E2] rectangle-item item7 absolute top-[8px] opacity-0 DropDown z-10"></div>
      <div class="w-full bg-[#010FFA] rectangle-item item8 absolute top-0 opacity-0 DropDownBlue"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rectangle-item {
  --u-item-height: 8px;
  &.item1 {
    --u-item-animation-height: 445px;
    --u-item-animation-bottom: calc(100vh - var(--u-item-height));
  }
  &.item2 {
    --u-item-animation-height: 250px;
    --u-item-animation-bottom: calc(100vh - var(--u-item-height) * 2);
  }
  &.item3 {
    --u-item-animation-height: 130px;
    --u-item-animation-bottom: calc(100vh - var(--u-item-height) * 3);
  }
  &.item4 {
    --u-item-height: 0;
    --u-item-animation-height: 60px;
    --u-item-animation-bottom: calc(100vh - 8px);
  }
  &.item5 {
    --u-item-height: 0;
    --u-item-animation-height: 26px;
    --u-item-animation-bottom: calc(100vh - 16px);
  }
  &.item6 {
    --u-item-animation-top: calc(100vh - var(--u-item-height) * 2);
  }
  &.item7 {
    --u-item-animation-height: 100vh;
    --u-item-animation-top: calc(100vh - var(--u-item-height));
  }
  &.item8 {
    --u-item-animation-height: 100vh;
  }
  height: var(--u-item-height);
  overflow: hidden;
}

.PushUp {
  animation: PushUp 1.5s linear forwards;
}
.PushUp1 {
  animation: PushUp 1.5s linear forwards;
  animation-delay: 0.01s;
}
.PushUp2 {
  animation: PushShow 1.5s linear forwards;
}

@keyframes PushUp {
  0% {
    height: var(--u-item-height);
    opacity: 1;
    bottom: 0;
  }

  25% {
    height: var(--u-item-animation-height);
    opacity: 1;
    bottom: 0;
  }

  50% {
    height: var(--u-item-animation-height);
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    height: var(--u-item-height);
    bottom: var(--u-item-animation-bottom);
    opacity: 0;
  }
}

@keyframes PushUp1 {
  0% {
    height: 0;
    opacity: 1;
    bottom: 0;
  }
  0% {
    height: var(--u-item-height);
    opacity: 1;
    bottom: 0;
  }
  25% {
    height: var(--u-item-animation-height);
    opacity: 1;
    bottom: 0;
  }
  50% {
    height: var(--u-item-animation-height);
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    height: var(--u-item-height);
    bottom: var(--u-item-animation-bottom);
    opacity: 0;
  }
}
@keyframes PushShow {
  0% {
    height: var(--u-item-height);
    opacity: 0;
    bottom: 0;
  }
  25% {
    height: var(--u-item-animation-height);
    opacity: 1;
    bottom: 0;
  }
  50% {
    height: var(--u-item-animation-height);
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    height: 8px;
    bottom: var(--u-item-animation-bottom);
    opacity: 0;
  }
}

.DropDown {
  animation: DropDown 1s forwards linear;
  animation-delay: 1.49s;
}

.DropDownPink {
  animation: DropDownP 1s forwards linear;
  animation-delay: 1.49s;
}

.DropDownBlue {
  animation: DropDownB 1s forwards linear;
  animation-delay: 1.49s;
}

@keyframes DropDown {
  0% {
    opacity: 1;
    height: var(--u-item-animation-height);
  }
  100% {
    opacity: 1;
    top: var(--u-item-animation-top);
  }
}
@keyframes DropDownP {
  0% {
    top: 0;
    opacity: 1;
  }
  100% {
    top: var(--u-item-animation-top);
    opacity: 1;
  }
}
@keyframes DropDownB {
  0% {
    opacity: 1;
    height: var(--u-item-height);
  }
  100% {
    opacity: 0.1;
    height: var(--u-item-animation-height);
  }
}
</style>
