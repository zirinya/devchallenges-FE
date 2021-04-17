<template>
  <div>
    <button
      :class="[variant, color]"
      :disabled="disabled"
      :style="{ 'background-color': color }"
    >
      <slot>{{ variant }} {{ color }} </slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    variant: String,
    disabled: Boolean,
    color: String,
    text: String,
  },
};
</script>
<style scoped lang ="css">
button {
  width: 81px;
  height: 36px;
  cursor: pointer;
  outline: transparent;
  border-color: transparent;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.defualt {
  background: #e0e0e0;
}
.primary {
  background: #2962ff;
  color: #fff;
}
.primary:hover {
  background: #0039cb;
}
.defualt:hover,
.defualt:focus {
  background: #aeaeae;
}
.outline {
  border: 1px solid #3d5afe;
  color: #3d5afe;
}
.outline:hover {
  border: 1px solid #3d5afe;
  background: rgba(41, 98, 255, 0.1);
}
.text {
  color: #3d5afe;
  background-color: transparent;
  box-shadow: none;
}
.text:hover {
  background: rgba(41, 98, 255, 0.1);
}
.text[disabled] {
  background-color: transparent;
  box-shadow: none;
  color: #e0e0e0;
  cursor: not-allowed;
}
[disabled] {
  cursor: not-allowed;
  background: #e0e0e0;
}
.danger {
  background-color: #d32f2f;
  color: #fff;
}
.danger:hover {
  background: #9a0007;
  color: #fff;
}
.secondary {
  background: #455a64;
  color: #fff;
}
.secondary:hover {
  background: #1c313a;
  color: #fff;
}
</style>
