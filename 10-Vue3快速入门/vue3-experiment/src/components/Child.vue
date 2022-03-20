<!-- Child.vue -->
<template>
  <div>
    <button @click="handleClick">{{ props.msg }}</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: String,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      console.log(props);
      emit("childClick", "Message form Child!");
    };
    return {
      props,
      handleClick,
    };
  },
};
</script>