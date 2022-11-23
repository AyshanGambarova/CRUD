export const vToUpperCase = {
  updated: (el) => {
    el.addEventListener("input", (e) => {
      const inputValue = e.target.value;
      e.target.value = inputValue.toUpperCase();
    });
  },
};
