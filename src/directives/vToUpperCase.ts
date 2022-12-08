export const vToUpperCase = {
  updated: (el: any) => {
    el.addEventListener('input', (e: any) => {
      const inputValue = e.target.value
      e.target.value = inputValue.toUpperCase()
    })
  }
}
