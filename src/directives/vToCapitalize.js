export const vToCapitalize = {
  updated: (el) => {
    el.addEventListener('input', (e) => {
      const inputValue = e.target.value

      //Arraya cevir
      const words = inputValue.split(' ')

      //Arrayda loop et
      // for (const [wordIndex, wordItem] of words.entries()) {
      //   words[wordIndex] = wordItem.charAt(0).toUpperCase() + wordItem.slice(1).toLowerCase()
      // }

      for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        words[wordIndex] = words[wordIndex].charAt(0).toUpperCase() + words[wordIndex].slice(1).toLowerCase();
      }

      e.target.value = words.join(' ')
    })
  }
}
