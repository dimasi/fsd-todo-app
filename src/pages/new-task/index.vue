<template>
  <div class="page-new-task">
    <div class="page-new-task__toolbar">
      <Toolbar title="New Task" />
    </div>

    <div class="page-new-task__body">
      <vs-row>
        <vs-col>
          <AddTask />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import { Toolbar } from '@/widgets/toolbar';
import { AddTask } from '@/features/add-task';

export default {
  name: 'PageNewTask',

  components: {
    AddTask,
    Toolbar,
  },
};
</script>

<style lang="scss" src="./index.scss" />
