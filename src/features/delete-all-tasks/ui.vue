<template>
  <vs-button
    color="danger"
    icon="delete_forever"
    size="small"
    type="border"
    :disabled="disabled"
    @click="deleteAllTasks"
  >
    Delete All
  </vs-button>
</template>

<script>
import { taskModel } from '@/entities/task';

export default {
  name: 'DeleteAllTasks',

  props: {
    disabled: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    async deleteAllTasks() {
      await this.$store.dispatch(taskModel.actions.deleteAllTasks);
      this.$emit('deleted');
    },
  },
};
</script>
