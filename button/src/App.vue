<template>
  <div id="app">
    <div class="btn-warpper">
      <Button startIcon="done" variant="outline" endIcon="done" />
      <Input placeholder="hi placeholder" label="label" helperText="fddgdfg" />
    </div>
  </div>
</template>

<script>
import Button from "../src/components/Button.vue";
import Input from "../src/components/Input.vue";
export default {
  name: "App",
  components: {
    Button,
    Input,
  },
};
</script>

<style>
.btn-warpper {
  width: 40%;
  margin: auto;
}
.d-flex {
  display: flex;
  justify-content: space-between;
}
</style>
