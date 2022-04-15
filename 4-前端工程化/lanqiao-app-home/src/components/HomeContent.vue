<template>
  <div class="home-content">
    <!-- 渲染课程列表 -->
    <CourseList v-if="courses?.length > 0" :courses="courses" />
  </div>
</template>

<script>
import CourseList from "./list/course-list";
//导入封装好的请求服务
import { getHomeData } from "../services/home-service";
//按需引入Vue3的相关内容
import { onMounted, reactive, toRef, ref, onUnmounted } from "vue";
import { addReachEndListener, removeReachEndListener } from "../utils/scroll";

export default {
  name: "HomeContent",
  components: {
    CourseList,
  },
  setup() {
    let courses = ref([]);
    let currPage = ref(1);
    let pageSize = ref(10);
    // 是否正在加载数据
    let isLoading = false;
    // 没有更多数据了
    let noMore = ref(false);

    // 刷新当前页面数据
    const refreshList = () => {
      noMore.value = false;
      currPage.value = 1;
      getCourseList();
    };

    const getCourseList = () => {
      // 正在请求数据
      isLoading = true;
      // 课程列表接口的请求参数
      let params = {
        page_size: pageSize.value,
        page: currPage.value,
      };
      //调用接口
      getHomeData(params)
        .then((res) => {
          // 数据加载结束
          isLoading = false;
          if (res && res.length > 0) {
            // 如果是第一页，直接将数据给数组
            if (currPage.value === 1) {
              courses.value = res;
            } else {
              // 非第一页的时候就叠加数据
              courses.value.push(...res);
            }
            // 如果当前页面的数据 < 请求的数量
            if (res.length < 10) {
              // 已经没有数据了
              noMore.value = true;
            }
          } else if (currPage.value > 1) {
            currPage.value--;
          }
        })
        .catch(() => {
          // 数据加载结束
          isLoading = false;
          // 如果当前页面 > 1,出错后状态需要回到上一个页面
          if (currPage.value > 1) {
            currPage.value--;
          }
        });
    };

    // 到底页面底部监听
    let reachEndHandler = null;

    onMounted(() => {
      // 页面第一次渲染的时候刷新页面
      refreshList();
      // 监听页面到达底部
      if (!reachEndHandler) {
        reachEndHandler = addReachEndListener(() => {
          // 后面还有数据 && 没有正在加载中
          if (!noMore.value && !isLoading) {
            currPage.value++;
            getCourseList();
          }
        });
      }
    });

    // unmounted 生命周期
    onUnmounted(() => {
      // 移除到达底部监听
      if (reachEndHandler) {
        removeReachEndListener(reachEndHandler);
      }
    });

    return {
      courses,
      noMore,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-content {
  white-space: normal;
  font-size: 20px;
}
</style>
