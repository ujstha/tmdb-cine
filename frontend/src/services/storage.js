const storage = {
  get: (key) => {
    return (localStorage && localStorage.getItem(key)) || null;
  },

  set: (key, value) => {
    if (!value || value.length <= 0) {
      return;
    }
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  },

  clean: (key) => {
    if (localStorage && localStorage[key]) {
      localStorage.removeItem(key);
      return true;
    }
  },
};

export default storage;
