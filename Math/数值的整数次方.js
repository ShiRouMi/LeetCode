// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(x===0) return 0
  let r = 1
  let flag = n<0 ? true : false
  if(n<0) {
      n = -n
  }
  while(n>0) {
    // n & 1 == 1// -> 看最后一位是否为1，用位运算 有几个测试用例会通不过
    if(n % 2) r *= x
    x *= x
    // // n >>>= 1 // -> 用位运算有几个测试用例通不过
    n = Math.floor(n/2);
  }
  return flag ? 1/r : r
};

/**
 * 使用位运算通不过的测试用例： 
 * 2.00000  -2147483648
 */