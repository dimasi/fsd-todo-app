import { apiInstance } from './base';
import { sleepRandom } from '@/shared/lib';

const BASE = 'tasks';

export const getTasksList = async () => {
  await sleepRandom();
  return apiInstance.get(BASE);
}

export const getTaskById = async ({ id }) => {
  await sleepRandom();
  return apiInstance.get(`${BASE}/${id}`);
}

export const deleteAllTasks = async () => {
  apiInstance.delete(BASE);
}

export const deleteCompletedTasks = async () => {
  const { data: allItems } = await getTasksList();
  const itemsWithoutCompleted = Object.values(allItems).filter(({ completed }) => !completed).reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});
  apiInstance.post(BASE, itemsWithoutCompleted);
}

export const deleteTaskById = async ({ id }) => {
  apiInstance.delete(`${BASE}/${id}`);
}

export const addTask = async ({ title, completed = false }) => {
  const taskId = Date.now();
  apiInstance.post(`${BASE}/${taskId}`, {
    title,
    completed,
  });
}

export const updateTask = async ({ id, title, completed }) => {
  apiInstance.post(`${BASE}/${id}`, {
    title,
    completed,
  });
}

export const toggleTask = async ({ id, completed }) => {
  const { data: task } = await getTaskById({ id });
  task.completed = completed;
  await updateTask(task);
}
