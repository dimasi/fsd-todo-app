import Vue from 'vue';
import {
  router,
  store,
} from './providers';
import App from './index.vue';

Vue.config.productionTip = false;

export const app = new Vue({
  router,
  store,
  render: h => h(App),
});
