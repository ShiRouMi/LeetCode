/**
 * create by shiroumi in 2019-4-1
 * title: 509. 斐波那契数
 * link: https://leetcode-cn.com/problems/fibonacci-number/
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N === 0 || N === 1) {
    return N
  } else {
    return fib(N - 1) + fib(N - 2)
  }
};
