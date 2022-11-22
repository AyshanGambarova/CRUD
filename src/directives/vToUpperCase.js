export const vToUpperCase = {
  updated: (el) => {
    el.addEventListener("input", (e) => {
      const value=e.target.value
      e.target.value = value.toUpperCase();
      console.log(e.target.value);
    });
  },
};
