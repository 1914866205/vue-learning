<template>
  <div class="course-list-item">
    <div class="course-list-item__img-wapper">
      <!--  课程图片  -->
      <img alt="" :src="picture_url" class="course-list-item__image" />
    </div>
    <!--  label  -->
    <div v-if="label && label.length > 0" class="course-list-item__label">
      {{ label }}
    </div>
    <!--  标题  -->
    <div v-if="name && name.length > 0" class="course-list-item__title">
      {{ name }}
    </div>
    <!--  底部人数跟课程级别  -->
    <div class="course-list-item__bottom">
      <span v-if="students_count > 0" class="course-list-item__bottom--count">
        {{ `${students_count} 人学过` }}
      </span>
      <span v-if="level.length > 0" class="course-list-item__bottom--level">
        {{ level }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseListItem",
  props: {
    // 课程主图
    picture_url: {
      type: String,
      default: "",
    },
    // 标题
    name: {
      type: String,
      default: "",
    },
    // 附加说明
    tag: {
      type: String,
      default: "",
    },
    // 附加说明背景颜色
    tagColor: {
      type: String,
      default: "",
    },
    // 人数
    students_count: {
      type: Number,
      default: 0,
    },
    // 级别
    level: {
      type: String,
      default: "",
    },
    // 课程标签
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.course-list-item {
  position: relative;
  width: calc(50% - 5px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  background: white;
  margin-bottom: 10px;
  &__img-wapper {
    position: relative;
    // 课程主图
    .course-list-item__image {
      width: 100%;
      height: 100px;
    }
    // 课程附加信息
    .course-list-item__tag {
      position: absolute;
      bottom: 5px;
      right: 5px;
      height: 20px;
      padding: 0 5px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      font-size: 12px;
      color: white;
    }
  }

  // 课程标签
  &__label {
    position: absolute;
    top: 4px;
    left: -5px;
    padding: 2px 5px;
    box-sizing: border-box;
    background: #f66;
    font-size: 12px;
    color: #fff;
    // 标签三角形图标
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: -8px;
      left: 0;
      transform: rotateZ(-45deg);
      transform-origin: left top;
      border: 4px solid transparent;
      border-left-color: #f66;
    }
  }
  // 课程标题
  &__title {
    padding: 5px;
    font-size: 14px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  // 底部模块
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    font-size: 12px;
    color: #a4a4a4;
  }
}
</style>
