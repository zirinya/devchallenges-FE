<template>
  <div id="app">
    <Button variant="defualt" />
    <Button variant="outline" />
    <Button variant="text" />
    <Button variant="defualt" disabled />
    <Button variant="text" disabled />
    <Button color="danger" />
    <Button color="secondary" />
    <Button color="primary" ></Button>
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
</style>
