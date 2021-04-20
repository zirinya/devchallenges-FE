<template>
  <div class="input">
    <label :for="name">{{ label }}</label>
    <div>
      <span class="material-icons">
        {{ startIcon }}
      </span>
      <input
        type="text"
        :placeholder="placeholder"
        :label="label"
        :disabled="disabled"
        :name="name"
        :helperText="helperText"
        :startIcon="startIcon"
        :endIcon="endIcon"
      />
      <span class="material-icons">
        {{ endIcon }}
      </span>
    </div>
    <small> {{ helperText }}</small>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    disabled: Boolean,
    helperText: String,
    name: String,
    startIcon: String,
    endIcon: String,
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>
<style>
.input {
  display: flex;
  flex-direction: column;
}
input {
  border: 1px solid rgb(117, 117, 117);
  border-radius: 8px;
  padding: 16px 8px;
}
input:hover {
  border: 1px solid rgb(0, 0, 0);
}
.inputstyle input[type="text"]:focus {
  border: 1px solid #2962ff;
  outline: none;
}

.error input[type="text"]:focus {
  border: 1px solid red;
  outline: none;
}
input[type="text"]:disabled {
  background-color: #f2f2f2;
  border: 1px solid #e0e0e0;
}
</style>
