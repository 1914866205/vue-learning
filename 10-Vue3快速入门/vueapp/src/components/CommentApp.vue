<!--CommentApp.vue-->
<template>
  <div class="container">
    <CommentInput @inputinfo="receiveInfo" />
    <CommentList :custom="Comments" :deleteFunction="deleteFunction" />
  </div>
</template>

<script>
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { ref, onBeforeMount } from "vue";

export default {
  name: "CommentApp",
  components: {
    CommentInput,
    CommentList,
  },
  setup() {
    const Comments = ref([]);
    // 加载 sessionStorage 中的帖子
    const loadData = () => {
      const loadComment = sessionStorage.getItem("comment");
      if (loadComment) {
        // 获取值的时候，再将其转化回来
        Comments.value = JSON.parse(loadComment);
        // 控制台打印获取的值，便于测试
        console.log(loadComment);
      }
    };
    // 将帖子存储入 sessionStorage 中
    const saveData = (comments) => {
      // 我们就需要将数据全部转换为字符串格式，然后再进行存储：
      sessionStorage.setItem("comment", JSON.stringify(comments.value));
    };

    const receiveInfo = (e) => {
      // 补充：当用户名或者评论内容为空时，弹出警示框
      if (!e.username) return alert("请输入用户名");
      if (!e.content) return alert("请输入评论内容");
      Comments.value.push(e);
      // 每次 Comments 修改，都会重新进行存储
      saveData(Comments);
    };
    // 在挂载开始之前，获取存储的数据
    onBeforeMount(() => {
      loadData();
    });

    // 帖子的索引信息 index 从 Comment 组件传达到 CommentApp 组件
    const deleteFunction = (index) => {
      console.log("删除帖子位置" + index);
      // 删除索引为 index 的评论帖子
      // 如果只实现这一步，页面中的评论也会被移除，但是当刷新时，刚刚被删除的帖子又会被显示出来
      // 所以我们不仅要从页面显示列表中删除，还要将存储在 sessionStorage 中相关的信息也删除
      Comments.value.splice(index, 1);
      // 删除相关帖子后，重新存储
      saveData(Comments);
    };

    return {
      receiveInfo,
      Comments,
      saveData,
      loadData,
      deleteFunction,
    };
  },
};
</script>

<style>
.container {
  width: 560px;
  margin: 10px auto;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid rgb(219, 219, 219);
  padding: 20px;
}
</style>
