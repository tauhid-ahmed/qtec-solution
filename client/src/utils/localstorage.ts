const getItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const setItem = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const localstorage = {
  getItem,
  setItem,
  removeItem,
};
