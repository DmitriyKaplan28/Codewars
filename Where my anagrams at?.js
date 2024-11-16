function anagrams(word, words) {
  return words.filter(v=>v.split('').sort().join('')===word.split('').sort().join(''))
}
