<template>
  <div class="app">
    <!-- 渲染主页组件 -->
    <HomePage />
  </div>
</template>
<script>
  // 引入主页组件
  import HomePage from "./pages/HomePage.vue";
  export default {
    name: "App",
    components: {
      HomePage, //注册主页组件
    },
  };
</script>
<style scoped lang="scss"></style>