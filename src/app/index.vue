<template>
  <div class="app" id="app">
    <div class="app__header">
      <div class="app__title">FSD Tasks App</div>

      <div class="app__nav">
        <vs-button
          color="dark"
          icon="list"
          size="small"
          to="/"
          type="border"
        >
          Tasks List
        </vs-button>

        <vs-button
          color="success"
          icon="add"
          size="small"
          to="/new-task"
          type="border"
        >
          Add Task
        </vs-button>
      </div>
    </div>

    <Routing />
  </div>
</template>

<script>
import Routing from '@/pages';

export default {
  name: 'App',
  components: { Routing },
};
</script>

<style lang="scss" src="./index.scss" />
