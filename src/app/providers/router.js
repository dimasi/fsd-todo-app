import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/pages';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
