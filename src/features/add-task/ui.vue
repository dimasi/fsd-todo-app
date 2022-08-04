<template>
  <div class="add-task">
    <vs-textarea
      class="add-task__title"
      label="Task title"
      v-model="title"
      :counter="TASK_TITLE_MAX_LENGTH"
      counter-danger.sync
    />

    <vs-button
      color="success"
      :disabled="noLength || maxLengthNotMet"
      @click="addTask"
    >
      Add Task
    </vs-button>
  </div>
</template>

<script>
import { TASK_TITLE_MAX_LENGTH } from '@/shared/config';
import { taskModel } from '@/entities/task';

export default {
  name: 'AddTask',

  data: () => ({
    TASK_TITLE_MAX_LENGTH,
    title: '',
  }),

  computed: {
    maxLengthNotMet() {
      return this.title.length > TASK_TITLE_MAX_LENGTH;
    },

    noLength() {
      return !this.title.length;
    },
  },

  methods: {
    async addTask() {
      if (this.noLength || this.maxLengthNotMet) return;

      await this.$store.dispatch(taskModel.actions.addTask, {
        title: this.title,
      });

      await this.$router.push('/');
    },
  },
};
</script>
