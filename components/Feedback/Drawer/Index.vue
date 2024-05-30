<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-show="drawerShow" class="fixed inset-0 h-screen u-overlay" :class="[props.resilience && 'resilience']" @click="close">
        <FeedbackMask />

        <div class="flex flex-col duration-500 u-drawer" :class="[props.direction]" :style="[{ width: props.drawerWidth, height: props.drawerHeight }]">
          <div :style="props.customStyle" :class="props.customClass" @click.stop>
            <slot> </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
interface Props {
  modelValue: boolean
  direction?: string
  customStyle?: any
  customClass?: any
  drawerWidth?: any
  drawerHeight?: any
  // 是否回弹
  resilience?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  direction: 'rtl',
  customStyle: null,
  customClass: null,
  drawerWidth: '',
  drawerHeight: '',
  resilience: false
})

const emits = defineEmits(['update:modelValue', 'close'])

const drawerShow = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value)
})

const close = () => {
  emits('update:modelValue', false)
  emits('close', false)
}
</script>
<style lang="scss" scoped>
$directions: rtl, ltr, ttb, btt;

.u-overlay {
  z-index: var(--u-modal-z-index);
  .u-drawer {
    position: absolute;
    @each $direction in $directions {
      .#{$direction} {
        transform: translate(0, 0);
      }
    }

    &.rtl,
    &.ltr {
      height: 100%;
      top: 0;
      bottom: 0;
    }
    &.ttb,
    &.btt {
      width: 100%;
      left: 0;
      right: 0;
    }

    &.rtl {
      right: 0;
    }
    &.ltr {
      left: 0;
    }
    &.ttb {
      top: 0;
    }
    &.btt {
      bottom: 0;
    }
  }
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
  }

  &-enter-from,
  &-enter-active,
  &-enter-to,
  &-leave-from,
  &-leave-active,
  &-leave-to {
    overflow: hidden !important;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
  &-enter-to,
  &-leave-from {
    &.resilience {
      @each $direction in $directions {
        .#{$direction} {
          @if $direction == ltr {
            transform: translateX(10px);
          }

          @if $direction == rtl {
            transform: translateX(-10px);
          }

          @if $direction == ttb {
            transform: translateY(10px);
          }

          @if $direction == btt {
            transform: translateY(-10px);
          }
        }
      }
    }
  }

  &-enter-from,
  &-leave-to {
    @each $direction in $directions {
      .#{$direction} {
        @if $direction == ltr {
          transform: translateX(-100%);
        }

        @if $direction == rtl {
          transform: translateX(100%);
        }

        @if $direction == ttb {
          transform: translateY(-100%);
        }

        @if $direction == btt {
          transform: translateY(100%);
        }
      }
    }
  }
}
</style>
