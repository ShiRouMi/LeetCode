// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0, remain = 0
    if(n <=1) return n
    while(n>1) {
        remain = n%2
        remain === 1 && count++
        n = (n-remain)/2
    }
    return count+1
};

// 先转成2进制，再使用正则
var hammingWeight = function(n) {
  let str = n.toString(2)
  let arr = str.match(/1/g)

  return arr ? arr.length : 0
}