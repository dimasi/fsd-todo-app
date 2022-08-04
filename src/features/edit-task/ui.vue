<template>
  <div class="edit-task">
    <vs-textarea
      class="edit-task__title"
      label="Task title"
      v-model="title"
      :counter="TASK_TITLE_MAX_LENGTH"
      counter-danger.sync
    />

    <vs-button
      color="success"
      :disabled="isSaveButtonDisabled"
      @click="saveTask"
    >
      Save Task
    </vs-button>
  </div>
</template>

<script>
import { TASK_TITLE_MAX_LENGTH } from '@/shared/config';
import { taskModel } from '@/entities/task';

export default {
  name: 'EditTask',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    TASK_TITLE_MAX_LENGTH,
    title: '',
  }),

  computed: {
    isLoading() {
      return this.$store.state[taskModel.NAMESPACE].isUpdating;
    },

    isSaveButtonDisabled() {
      return this.isLoading || this.noLength || this.maxLengthNotMet;
    },

    maxLengthNotMet() {
      return this.task.title.length > TASK_TITLE_MAX_LENGTH;
    },

    noLength() {
      return !this.task.title.length;
    },
  },

  watch: {
    'task.title': {
      immediate: true,
      handler(v) {
        this.title = v;
      },
    },
  },

  methods: {
    async saveTask() {
      if (this.noLength || this.maxLengthNotMet) return;

      await this.$store.dispatch(taskModel.actions.updateTask, {
        ...this.task,
        title: this.title,
      });

      await this.$router.push('/');
    },
  },
};
</script>
