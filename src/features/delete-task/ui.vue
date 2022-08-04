<template>
  <vs-button
    color="danger"
    icon="delete"
    size="small"
    type="border"
    @click="deleteTask"
  >
    <span v-if="withTitle">Delete</span>
  </vs-button>
</template>

<script>
import { taskModel } from '@/entities/task';

export default {
  name: 'DeleteTask',

  props: {
    task: {
      type: Object,
      required: true,
    },

    withTitle: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    async deleteTask() {
      await this.$store.dispatch(taskModel.actions.deleteTask, { id: this.task.id });
      this.$emit('deleted');
    },
  },
};
</script>
