<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
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
