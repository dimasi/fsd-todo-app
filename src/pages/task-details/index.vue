<template>
  <div class="page-task-detail">
    <div class="page-task-detail__toolbar">
      <Toolbar
        :title="pageTitle"
        :loading="isLoading"
      >
        <template #actions>
          <ToggleTask
            :task="task"
            with-status
            @toggled="fetchTask"
          />

          <vs-button
            color="dark"
            icon="edit"
            size="small"
            type="border"
            :to="editHref"
          >
            Edit
          </vs-button>

          <DeleteTask
            :task="task"
            with-title
            @deleted="$router.push('/')"
          />
        </template>
      </Toolbar>
    </div>

    <div
      v-if="dataLoaded"
      class="page-task-detail__body"
    >
      <vs-row>
        <vs-col>
          <TaskDetail :task="task" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import { TaskDetail, taskModel } from '@/entities/task';
import { Toolbar } from '@/widgets/toolbar';
import { ToggleTask } from '@/features/toggle-task';
import { DeleteTask } from '@/features/delete-task';

export default {
  name: 'PageTaskDetail',

  components: {
    DeleteTask,
    TaskDetail,
    ToggleTask,
    Toolbar,
  },

  data: () => ({
    dataLoaded: false,
  }),

  computed: {
    editHref() {
      return `/edit-task/${this.taskId}`;
    },

    isLoading() {
      return this.$store.state[taskModel.NAMESPACE].isDetailsLoading;
    },

    pageTitle() {
      return `Task ID: ${this.taskId}`;
    },

    task() {
      return this.$store.state[taskModel.NAMESPACE].data;
    },

    taskId() {
      return this.$route.params.taskId;
    },
  },

  async mounted() {
    await this.fetchTask();
    this.dataLoaded = true;
  },

  watch: {
    task(v) {
      if (!v) this.$router.push('/');
    },
  },

  methods: {
    async fetchTask() {
      await this.$store.dispatch(taskModel.actions.fetchTask, { id: this.taskId });
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
