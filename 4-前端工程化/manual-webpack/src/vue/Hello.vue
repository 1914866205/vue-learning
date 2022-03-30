<template>
  <div class="box">{{ message }}</div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      message: "Hello组件中的值",
    };
  },
};
</script>
<style scoped>
.box {
  width: 300px;
  height: 300px;
  line-height: 300px;
  background-color: #b488b8;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>
