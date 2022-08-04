<template>
  <vs-checkbox
    v-model="innerModel"
    color="success"
  >
    <span v-if="withStatus">
      {{ status }}
    </span>
  </vs-checkbox>
</template>

<script>
import { taskModel, taskLib } from '@/entities/task';

export default {
  name: 'ToggleTask',

  props: {
    task: {
      type: Object,
      required: true,
    },

    withStatus: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      innerModel: this.task.completed,
    };
  },

  computed: {
    status() {
      return taskLib.getTaskStatus(this.task);
    },
  },

  watch: {
    async innerModel(completed) {
      await this.toggleTask({ completed });
    },

    'task.completed': {
      handler(completed) {
        if (completed === undefined) return;
        this.innerModel = !!completed;
      },
    },
  },

  methods: {
    async toggleTask({ completed }) {
      await this.$store.dispatch(taskModel.actions.toggleTask, {
        id: this.task.id,
        completed,
      });
      this.$emit('toggled');
    },
  },
};
</script>
