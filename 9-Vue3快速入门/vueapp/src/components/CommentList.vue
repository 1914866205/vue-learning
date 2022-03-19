<!--CommentList.vue-->
<template>
  <div v-for="(one, index) in comments" :key="index" class="commentList">
    <comment-item :comment="one" />
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue";
import CommentItem from "./CommentItem";
export default {
  name: "CommentList",
  components: {
    CommentItem,
  },
  props: {
    custom: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    var comments = ref([]);
    onMounted(() => {
      comments = props.custom;
    });
    watchEffect(() => {
      comments.value = props.custom;
    });
    return {
      comments,
      props,
    };
  },
};
</script>

<style>
.commentList {
  text-align: center;
  background-color: #fff;
  width: 520px;
  margin: 10px auto;
  font-size: 14px;
}
</style>
