/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let arr = s.split(''), map = {}, count = 0, flag = false
  for(let val of arr) {
      map[val] = map[val] ? map[val] + 1 : 1
  }

  for(let n of Object.values(map)) {
      if(n % 2 === 0) {
          count +=n
      } else {
          if(n > 2) {
              count += parseInt(n/2) * 2
          }
          !flag && count++
          flag = true
      }
  }
  return count
};