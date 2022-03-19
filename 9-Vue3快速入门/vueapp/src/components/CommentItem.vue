<!--CommentItem.vue-->
<template>
  <div className="comment">
    <div className="user">
      <span>{{ props.comment.username }} </span>：
    </div>
    <p class="content">{{ props.comment.content }}</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "CommentItem",
  props: {
    comment: Object,
  },
  setup(props) {
    onMounted(() => {
      // 打印获取 props
      console.log(props);
    });
    return {
      props,
    };
  },
};
</script>

<style>
.comment {
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 55px;
  font-size: 16px;
}

.comment .content {
  margin: 0;
  word-wrap: break-word;
  word-break: break-all;
  max-width: 450px;
  text-align: left;
}

.comment .user {
  flex-shrink: 0;
}

.comment span {
  color: #00a3cf;
  font-style: italic;
}
</style>
