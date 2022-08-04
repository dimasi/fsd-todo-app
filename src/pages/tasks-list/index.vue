<template>
  <div class="page-tasks-list">
    <div class="page-tasks-list__toolbar">
      <Toolbar
        title="Tasks List"
        :loading="isLoading"
      >
        <template #actions>
          <DeleteCompletedTasks
            :disabled="isTasksListEmpty"
            @deleted="fetchTasksList"
          />

          <DeleteAllTasks
            :disabled="isTasksListEmpty"
            @deleted="fetchTasksList"
          />
        </template>
      </Toolbar>
    </div>

    <div
      v-if="dataLoaded"
      class="page-tasks-list__body"
    >
      <div
        v-if="isTasksListEmpty"
        class="page-tasks-list__no-tasks"
      >
        No tasks...
      </div>

      <TaskRow
        v-else
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      >
        <template #toggler>
          <ToggleTask
            :task="task"
            @toggled="fetchTasksList"
          />
        </template>

        <template #actions>
          <DeleteTask
            :task="task"
            @deleted="fetchTasksList"
          />
        </template>
      </TaskRow>
    </div>
  </div>
</template>

<script>
import { TaskRow, taskModel } from '@/entities/task';
import { Toolbar } from '@/widgets/toolbar';
import { ToggleTask } from '@/features/toggle-task';
import { DeleteTask } from '@/features/delete-task';
import { DeleteAllTasks } from '@/features/delete-all-tasks';
import { DeleteCompletedTasks } from '@/features/delete-completed-tasks';

export default {
  name: 'PageTasksList',

  components: {
    DeleteAllTasks,
    DeleteCompletedTasks,
    DeleteTask,
    TaskRow,
    ToggleTask,
    Toolbar,
  },

  data: () => ({
    dataLoaded: false,
  }),

  computed: {
    tasks() {
      return this.$store.state[taskModel.NAMESPACE].data;
    },

    isLoading() {
      return this.$store.state[taskModel.NAMESPACE].isTasksListLoading;
    },

    isTasksListEmpty() {
      return this.$store.getters[taskModel.getters.isTasksListEmpty];
    },
  },

  async mounted() {
    await this.fetchTasksList();
    this.dataLoaded = true;
  },

  methods: {
    async fetchTasksList() {
      await this.$store.dispatch(taskModel.actions.fetchTasksList);
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
