/**
 * created by fy on 2017/12/13
 * Title: Sqrt.js
 * Implement int sqrt(int x).
Compute and return the square root of x.
x is guaranteed to be a non-negative integer.
 * link: https://leetcode.com/problems/sqrtx/description/
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return parseInt(Math.pow(x, 0.5));
};
// Newton's 
var mySqrt2 = function (x) {
  var r = x;
  while (r * r > x) {
    r = parseInt(((r + parseInt(x/r)) / 2)) || 0;
  }
  return parseInt(r);
};