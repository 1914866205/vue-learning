<!--App.vue-->
<template>
  <div id="app">
    <CommentApp />
  </div>
</template>

<script>
import CommentApp from "./components/CommentApp.vue";

export default {
  name: "App",
  components: {
    CommentApp,
  },
};
</script>
