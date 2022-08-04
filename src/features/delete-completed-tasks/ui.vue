<template>
  <vs-button
    color="danger"
    icon="delete_sweep"
    size="small"
    type="border"
    :disabled="disabled"
    @click="deleteCompletedTasks"
  >
    Delete Completed
  </vs-button>
</template>

<script>
import { taskModel } from '@/entities/task';

export default {
  name: 'DeleteCompletedTasks',

  props: {
    disabled: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    async deleteCompletedTasks() {
      await this.$store.dispatch(taskModel.actions.deleteCompletedTasks);
      this.$emit('deleted');
    },
  },
};
</script>
