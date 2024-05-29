import { e as definePropType, s as success_filled_default, p as warning_filled_default, q as circle_close_filled_default, t as info_filled_default, u as loading_default, x as circle_check_default, l as circle_close_default, g as close_default } from './index-C8rz0VXy.mjs';

const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const TypeComponents = {
  Close: close_default,
  SuccessFilled: success_filled_default,
  InfoFilled: info_filled_default,
  WarningFilled: warning_filled_default,
  CircleCloseFilled: circle_close_filled_default
};
const TypeComponentsMap = {
  success: success_filled_default,
  warning: warning_filled_default,
  error: circle_close_filled_default,
  info: info_filled_default
};
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};

export { TypeComponentsMap as T, ValidateComponentsMap as V, TypeComponents as a, iconPropType as i };
