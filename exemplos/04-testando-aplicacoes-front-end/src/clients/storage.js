const STORAGE_KEY = 'user';

export const getData = ({ client = localStorage } = {}) => JSON.parse(client.getItem(STORAGE_KEY));
export const setData = ({ client = localStorage, data } = {}) => client.setItem(STORAGE_KEY, JSON.stringify(data));
export const removeData = ({ client = localStorage } = {}) => client.removeItem(STORAGE_KEY);
export const hasData = () => !!getData();

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
