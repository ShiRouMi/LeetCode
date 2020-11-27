/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let head = 0, tail = 0
  let len = s.length
  if(len <=1) return len
  let count = 1
  while(tail < len-1) {
      tail++
      let val = s[tail]
      let dis = s.slice(head, tail)
      if(dis.indexOf(val) === -1) {
          count = Math.max(count, tail-head+1)
      } else {
          while(dis.indexOf(val) !== -1) {
            head++
            dis = s.slice(head, tail)
          }
      }
  }
  return count
};

// console.log(lengthOfLongestSubstring("abcabcbb"))

var lengthOfLongestSubstring = function(s) {
  let head = 0, tail = 0
  let hashmap = {}
  let len = s.length, count = 0
  while(tail < len) {
    let val = s[tail]
    if(hashmap[val] !== undefined) {
      head = Math.max(hashmap[val], head)
    }
    hashmap[val] = tail + 1
    count = Math.max(count, tail - head + 1)
    tail++
  }
  return count
};
console.log(lengthOfLongestSubstring("abcabcbb"))