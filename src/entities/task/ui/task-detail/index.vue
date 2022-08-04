<template>
  <vs-card
    class="task-detail"
    :class="{ _completed: task.completed }"
  >
    {{ task.title }}
  </vs-card>
</template>

<script>
export default {
  name: 'TaskDetail',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
