// https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  let len = a.length
  if(len === 0) return []

  let b = Array(len)
  b[0] = 1
  let tmp = 1

  for(let i=1; i<len; i++) {
      b[i] = b[i-1] * a[i-1]
  }

  for(let i=a.length - 2; i>=0; i--) {
      tmp *=a[i+1]
      b[i] *= tmp
  }

  return b
};

// 2020-12-17 不会