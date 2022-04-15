<template>
  <div class="home">
    <!-- 头部 -->
    <NavHeader />
    <!-- NavTab 组件 -->
    <NavTab v-model:activatedIndex="activatedIndex">
      <!-- 首页主体内容 -->
      <TabItem
        v-for="(tab, index) in tabs"
        :key="`tab-${tab}-${index}`"
        :title="tab"
        :activated="index === activatedIndex"
      >
        <HomeContent />
      </TabItem>
    </NavTab>
  </div>
</template>

<script>
import { ref } from "vue";
// 引入 NavHeader 组件
import NavHeader from "../components/NavHeader.vue";
// 引入 NavTab和 TabItem 组件
import { NavTab, TabItem } from "../components/tab";
// 引入主页面 HomeContent 内容组件
import HomeContent from "../components/HomeContent.vue";
export default {
  name: "HomePage",
  components: {
    NavHeader,
    NavTab,
    TabItem,
    HomeContent,
  },
  setup() {
    // 所有的 tabs
    const tabs = ref(["首页"]);
    // 当前选中的 tab
    let activatedIndex = ref(0);

    return {
      activatedIndex,
      tabs,
    };
  },
};
</script>

<style scoped></style>
