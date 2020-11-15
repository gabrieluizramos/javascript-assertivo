export const getUserData = () => JSON.parse(localStorage.getItem('user'));
export const setUserData = data => localStorage.setItem('user', JSON.stringify(data));

const clearCookie = () => {
  const past = new Date(0, 0, 0)
  document.cookie = `uid=; expires=${past}`
}

export const eraseUserData = () => {
  setUserData('');
  clearCookie();
}

export const isLoggedIn = () => !!getUserData();
