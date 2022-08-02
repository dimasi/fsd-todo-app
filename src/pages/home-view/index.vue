<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorldCard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { HelloWorldCard } from '@/entities/hello-world';

export default {
  name: 'HomeView',
  components: {
    HelloWorldCard,
  },
};
</script>
