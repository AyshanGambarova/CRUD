export const vToLowerCase = {
  updated: (el: any) => {
    el.addEventListener('input', (e: any) => {
      const inputValue = e.target.value
      e.target.value = inputValue.toLowerCase()
    })
  }
}
