<template>
  <div id="app">
    <div class="btn-warpper">
      <div class="d-flex">
        <div>"Button" <Button variant="defualt" /></div>
      </div>
      <div class="d-flex">
        <div>"outline" <Button variant="outline" /></div>
      </div>

      <div class="d-flex">
        <div>"text" <Button variant="text" /></div>
      </div>
      <div class="d-flex">
        <div>"disable" <Button variant="defualt" disabled /></div>
        <div>"disable" <Button variant="text" disabled /></div>
      </div>
      <div class="d-flex">
        <Button variant="defualt" />
        <Button color="danger" />
        <Button color="secondary" />
        <Button color="primary" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../src/components/Button.vue";

export default {
  name: "App",
  components: {
    Button,
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
