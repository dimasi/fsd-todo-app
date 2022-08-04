<template>
  <vs-row
    class="task-row"
    :class="{ _completed: task.completed }"
  >
    <vs-col
      class="task-row__col"
      vs-type="flex"
      vs-align="center"
    >
      <slot name="toggler" />

      <router-link
        class="task-row__title"
        :to="taskHref"
      >
        {{ task.title }}
      </router-link>

      <vs-button
        class="task-row__edit-link"
        color="dark"
        icon="edit"
        size="small"
        type="border"
        :to="editHref"
      />

      <div class="task-row__actions">
        <slot name="actions" />
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'TaskRow',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  computed: {
    taskHref() {
      return `/task/${this.task.id}`;
    },

    editHref() {
      return `/edit-task/${this.task.id}`;
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
