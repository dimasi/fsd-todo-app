import Routing from './index.vue';

export const routes = [
  {
    path: '/',
    name: 'tasks-list',
    component: () => import(/* webpackChunkName: "tasks-list" */ './tasks-list'),
  },
  {
    path: '/new-task',
    name: 'new-task',
    component: () => import(/* webpackChunkName: "new-task" */ './new-task'),
  },
  {
    path: '/task/:taskId',
    name: 'task-details',
    component: () => import(/* webpackChunkName: "edit-task" */ './task-details'),
  },
  {
    path: '/edit-task/:taskId',
    name: 'edit-task',
    component: () => import(/* webpackChunkName: "edit-task" */ './edit-task'),
  },
];

export default Routing;
