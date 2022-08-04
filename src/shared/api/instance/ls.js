const LS_KEY = 'fsd_todo_app';

const getLocalStorageData = () => JSON.parse(localStorage.getItem(LS_KEY)) || {};

const saveLocalStorageData = (data) => {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

const response = (data) => ({ data });

export const apiInstanceLS = {
  get(path) {
    const [ listKey, id ] = path.split('/');
    const data = getLocalStorageData();
    const items = data[listKey] || {};
    if (!id) return response(items);
    return response(items[id]);
  },

  post(path, payload) {
    const [ listKey, id ] = path.split('/');
    const data = getLocalStorageData();

    if (!id) {
      data[listKey] = payload;
    } else {
      const {
        title,
        completed,
      } = payload;

      if (!data[listKey]) data[listKey] = {};

      data[listKey] = {
        ...data[listKey],
        [id]: {
          id,
          title,
          completed,
        },
      };
    }

    saveLocalStorageData(data);
  },

  delete(path) {
    const [ listKey, id ] = path.split('/');
    const data = getLocalStorageData();

    if (!data[listKey]) return;

    if (!id) {
      delete data[listKey];
    } else {
      delete data[listKey][id];
    }

    localStorage.setItem(LS_KEY, JSON.stringify(data));
  },
};
