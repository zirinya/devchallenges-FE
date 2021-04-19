<template>
  <div>
    <button
      :class="[variant, color, btnClass]"
      :disabled="disabled"
      :style="{ 'background-color': color }"
      :size="size"
      :startIcon="startIcon"
      :endIcon="endIcon"
    >
      <div class="d-flex">
        <span><i :class="startIcon"></i></span>
        <div class="my">{{ variant }} {{ color }}</div>
        <span><i :class="endIcon"></i></span>
      </div>
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
    size: {
      type: String,
      default: "md",
    },
    startIcon: String,
    endIcon: String,
  },
  computed: {
    btnClass() {
      return {
        "small-btn": this.size == "sm",
        "medium-btn": this.size == "md",
        "large-btn": this.size == "lg",
      };
    },
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
.small-btn {
  height: 30px;
  width: auto;
}
.medium-btn {
  height: 50px;
  width: auto;
}
.my {
  margin: 0px 17px;
}
.large-btn {
  height: 70px;
  width: auto;
}

.defualt:hover,
.defualt:focus {
  background: #aeaeae;
}
.py-2 {
  padding: 0px 60px;
}
.outline {
  border: 1px solid #3d5afe;
  color: #3d5afe;
  background: transparent;
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
.d-flex {
  display: flex;
}
</style>
