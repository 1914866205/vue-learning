<!--CommentList.vue-->
<template>
  <div
    v-for="(one, index) in props.custom"
    :key="index"
    className="commentList"
  >
    <comment-item :comment="one" :deleteFun="deleteFun" />
  </div>
</template>

<script>
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
    // 定义 props.deledeleteFunction 是函数类型
    deleteFunction: Function,
  },
  setup(props) {
    // deleteFun 函数，获取帖子 index 作为参数传给 CommentApp 组件
    const deleteFun = (index) => {
      // 调用父组件的 deleteFunction 函数，并将 index 作为参数传入
      if (props.deleteFunction) {
        props.deleteFunction(index);
      }
    };
    return {
      props,
      deleteFun,
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
