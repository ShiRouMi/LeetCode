/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let obj = {}
  // map 用来存储每个字符的个数
  for(let val of s) {
    if(val in obj) obj[val]++
    else obj[val] = 1
  }
  let count = 0
  for(let v in obj) {
    if(obj[v] % 2 !== 0) count++
    if(count > 1) return false
  }
  return true
};

console.log(canPermutePalindrome("aabb"))