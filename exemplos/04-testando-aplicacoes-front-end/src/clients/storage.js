const STORAGE_KEY = 'user';

export const getData = () => JSON.parse(localStorage.getItem(STORAGE_KEY));
export const setData = data => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
export const hasData = () => !!getData();

const clearCookie = () => {
  const past = new Date(0, 0, 0)
  document.cookie = `uid=; expires=${past}`
};

export const clearData = () => {
  setData('');
  clearCookie();
};
