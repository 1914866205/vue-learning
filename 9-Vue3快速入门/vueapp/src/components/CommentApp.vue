<!--CommentApp.vue-->
<template>
  <CommentInput @inputinfo="receiveInfo" />
  <CommentList :custom="Comments" />
</template>

<script>
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { ref } from "vue";

export default {
  name: "CommentApp",
  components: {
    CommentInput,
    CommentList,
  },
  setup() {
    const customcomment = ref({});
    const Comments = ref([]);

    const receiveInfo = (e) => {
      Comments.value.push(e);
      console.log(Comments.value);
    };
    return {
      customcomment,
      receiveInfo,
      Comments,
    };
  },
};
</script>

<style>
/* .container {
  width: 560px;
  margin: 10px auto;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  padding: 20px;
} */
</style>
