import Vue from 'vue';
import Vuex from 'vuex';
import { taskModel } from '@/entities/task';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    [taskModel.NAMESPACE]: taskModel.module,
  },
});
