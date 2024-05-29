import { watch, unref, inject, computed } from 'vue';
import { n as buildProp } from './index-C8rz0VXy.mjs';

const componentSizes = ["", "default", "small", "large"];
const useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {});
  return computed(() => {
    return unref(injectedSize.size) || "";
  });
};

export { SIZE_INJECTION_KEY as S, useGlobalSize as a, useSizeProp as b, componentSizes as c, useDeprecated as u };
