export const vToLowerCase = {
  updated: (el) => {
    el.addEventListener("input", (e) => {
      e.target.value = e.target.value.toLowerCase();
    });
  },
};
