/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let map = {}, res = ''
  for(let val of chars.split('')) {
      map[val] = map[val] ? map[val] + 1 : 1
  }
  for(let word of words) {
      let count = 0, mm = JSON.parse(JSON.stringify(map))
      if(word.length > chars.length) continue;
      for(let c of word) {
          if(mm[c] && mm[c] > 0) {
              count++
              mm[c] -= 1
              continue;
          } else {
              break
          }
      }
      if(count === word.length) {
        res += word
      }

  }
  return res.length
};
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"))