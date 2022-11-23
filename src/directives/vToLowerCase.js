export const vToLowerCase = {
  updated: (el) => {
    el.addEventListener("input", (e) => {
      const inputValue = e.target.value;
      e.target.value = inputValue.toLowerCase();
    });
  },
};
