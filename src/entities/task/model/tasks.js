import * as apiTasks from '@/shared/api/tasks';

export const NAMESPACE = 'tasks';

export const module = {
  namespaced: true,

  state: {
    data: {},
    isTasksListLoading: false,
    isDetailsLoading: false,
    isAddTaskLoading: false,
    isUpdating: false,
    queryConfig: {},
  },

  getters: {
    isTasksListEmpty: (state) => Object.keys(state.data).length === 0,
  },

  mutations: {
    setTasksList: (state, response) => {
      state.data = response?.data;
    },

    setTask: (state, response) => {
      state.data = response?.data;
    },

    setTasksListLoading: (state, isLoading) => {
      state.isTasksListLoading = isLoading;
    },

    setTaskDetailsLoading: (state, isLoading) => {
      state.isDetailsLoading = isLoading;
    },

    setUpdating: (state, isLoading) => {
      state.isUpdating = isLoading;
    },
  },

  actions: {
    fetchTasksList: async ({ commit }) => {
      commit('setTasksListLoading', true);
      try {
        commit('setTasksList', await apiTasks.getTasksList());
      } finally {
        commit('setTasksListLoading', false);
      }
    },

    fetchTask: async ({ commit }, { id }) => {
      commit('setTaskDetailsLoading', true);
      try {
        commit('setTask', await apiTasks.getTaskById({ id }));
      } finally {
        commit('setTaskDetailsLoading', false);
      }
    },

    toggleTask: async ({ commit }, { id, completed }) => {
      commit('setUpdating', true);
      try {
        await apiTasks.toggleTask({ id, completed });
      } finally {
        commit('setUpdating', false);
      }
    },

    addTask: async ({ commit }, { title }) => {
      commit('setUpdating', true);
      try {
        await apiTasks.addTask({ title });
      } finally {
        commit('setUpdating', false);
      }
    },

    updateTask: async ({ commit }, task) => {
      commit('setUpdating', true);
      try {
        await apiTasks.updateTask(task);
      } finally {
        commit('setUpdating', false);
      }
    },

    deleteTask: async ({ commit }, { id }) => {
      commit('setUpdating', true);
      try {
        await apiTasks.deleteTaskById({ id });
      } finally {
        commit('setUpdating', false);
      }
    },

    deleteAllTasks: async ({ commit }) => {
      commit('setUpdating', true);
      try {
        await apiTasks.deleteAllTasks();
      } finally {
        commit('setUpdating', false);
      }
    },

    deleteCompletedTasks: async ({ commit }) => {
      commit('setUpdating', true);
      try {
        await apiTasks.deleteCompletedTasks();
      } finally {
        commit('setUpdating', true);
      }
    },
  }
};

const withNamespace = (name) => `${NAMESPACE}/${name}`;

export const getters = {
  isTasksListEmpty: withNamespace('isTasksListEmpty'),
};

export const actions = {
  fetchTasksList: withNamespace('fetchTasksList'),
  fetchTask: withNamespace('fetchTask'),
  toggleTask: withNamespace('toggleTask'),
  addTask: withNamespace('addTask'),
  updateTask: withNamespace('updateTask'),
  deleteTask: withNamespace('deleteTask'),
  deleteCompletedTasks: withNamespace('deleteCompletedTasks'),
  deleteAllTasks: withNamespace('deleteAllTasks'),
};
