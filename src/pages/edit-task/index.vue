<template>
  <div class="page-edit-task">
    <div class="page-edit-task__toolbar">
      <Toolbar
        title="New Task"
        :loading="isLoading"
      />
    </div>

    <div
      v-if="dataLoaded"
      class="page-edit-task__body"
    >
      <vs-row>
        <vs-col>
          <EditTask :task="task" />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import { taskModel } from '@/entities/task';
import { Toolbar } from '@/widgets/toolbar';
import { EditTask } from '@/features/edit-task';

export default {
  name: 'PageEditTask',

  components: {
    EditTask,
    Toolbar,
  },

  data: () => ({
    dataLoaded: false,
  }),

  computed: {
    isLoading() {
      return this.$store.state[taskModel.NAMESPACE].isDetailsLoading;
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

  methods: {
    async fetchTask() {
      await this.$store.dispatch(taskModel.actions.fetchTask, { id: this.taskId });
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
