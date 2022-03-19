<!-- 父组件 App.vue -->
<template>
  <div class="box">
    <child :msg="parentMsg" @childClick="parentClick" />
  </div>
</template>

<script>
import { ref } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    const parentMsg = ref("Message from Parent!");
    const parentClick = (e) => {
      console.log(e);
    };
    return { parentMsg, parentClick };
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: rgb(128, 182, 196);
}
</style>