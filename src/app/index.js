import Vue from 'vue';
import { router } from './providers';
import App from './index.vue';

Vue.config.productionTip = false;

export const app = new Vue({
  router,
  render: h => h(App),
});
