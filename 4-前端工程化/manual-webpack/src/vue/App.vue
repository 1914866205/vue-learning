<template>
  <div class="container">
    <h2>{{ message }}</h2>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from "./Hello.vue";
export default {
  name: "App",
  components: {
    Hello,
  },
  data() {
    return {
      message: "父组件",
    };
  },
};
</script>

<style scoped>
.container {
  width: 85%;
  min-height: 600px;
  margin: 0 auto;
  background-color: #fff;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 30px;
}
</style>
