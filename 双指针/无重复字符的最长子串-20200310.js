/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0, newStr = []
  for(let i=0, j=0, len=s.length; i<len; i++) {
    if(newStr.indexOf(s[i]) === -1) {
      newStr.push(s[i])
    } else {
      j++
      newStr = []
      i = j - 1
    }
    max = Math.max(max, newStr.length)
  }
  return max
};
console.log(lengthOfLongestSubstring("dvdf"))