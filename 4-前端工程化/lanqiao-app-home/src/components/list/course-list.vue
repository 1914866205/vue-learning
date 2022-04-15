<template>
  <!-- <div v-if="courses && courses.length > 0" class="course-list"> -->
  <transition-group
    v-if="courses && courses.length > 0"
    :appear="true"
    name="scale"
    tag="div"
    class="course-list"
  >
    <!-- 渲染课程列表 -->
    <CourseListItem
      v-for="(course, index) in courses"
      :key="`course-item-${index}`"
      :name="course.name"
      :students_count="course.students_count"
      :picture_url="course.picture_url"
      :label="course.label"
      :level="getLevelFromCode(course.level)"
    />
  </transition-group>
</template>

<script>
import CourseListItem from "./course-list-item";
import { LEVEL_MAP } from "../../constants/page";

export default {
  name: "CourseList",
  components: {
    CourseListItem,
  },
  props: {
    courses: {
      // 课程列表
      type: Array,
      default: () => [],
    },
  },
  setup() {
    // 课程等级映射
    const getLevelFromCode = (code) => {
      return LEVEL_MAP[code] || "";
    };
    return {
      getLevelFromCode,
    };
  },
};
</script>

<style lang="scss" scoped>
.course-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  background: #efefef;
}
</style>
