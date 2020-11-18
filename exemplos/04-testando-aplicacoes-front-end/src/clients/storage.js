export const STORAGE_KEY = 'user';
const baseClient = localStorage;

export const getData = ({ client = baseClient } = {}) => JSON.parse(client.getItem(STORAGE_KEY));
export const setData = ({ client = baseClient, data = {} } = {}) => client.setItem(STORAGE_KEY, JSON.stringify(data));
export const removeData = ({ client = baseClient } = {}) => client.removeItem(STORAGE_KEY);
export const hasData = (opts) => !!getData(opts);

export const clearCookie = ({ client }) => {
  const past = new Date(0, 0, 0)
  const expireString = `uid=; expires=${past}`;
  client.cookie = expireString;

  return expireString;
};

export const erase = () => {
  clearCookie({ client: document });
  removeData();
};
