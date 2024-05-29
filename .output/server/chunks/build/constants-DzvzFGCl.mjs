import { pick } from 'lodash-unified';
import { b as buildProps } from './index-C8rz0VXy.mjs';

const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");

export { formItemContextKey as a, formContextKey as f, useAriaProps as u };
