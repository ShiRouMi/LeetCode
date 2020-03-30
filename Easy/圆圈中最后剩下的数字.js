/**
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let result = 0;
  for(let i = 2; i < n + 1; i++) {
      result = (m + result) % i;
      console.log(result)
  }
  return result
};

console.log(lastRemaining(5, 3))