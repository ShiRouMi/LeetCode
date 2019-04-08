/**
 * create by shiroumi in 2019-4-8
 * title: 976. Largest Perimeter Triangle
 * link: https://leetcode-cn.com/problems/largest-perimeter-triangle/comments/
 */

/**
* @param {number[]} A
* @return {number}
*/
var largestPerimeter = function (A) {
  var len = A.length
  if (len < 3) return 0
  var arr = A.sort((a, b) => b - a)
  for (var i = 0; i < len - 2; ++i) {
    var a1 = arr[i], a2 = arr[i + 1], a3 = arr[i + 2]
    if ((a1 < a2 + a3) && (a1 - a3) < a2) {
      return a1 + a2 + a3
    }
  }
  return 0
};
