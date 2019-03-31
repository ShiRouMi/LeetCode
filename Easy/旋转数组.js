/**
 * create by shiroumi in 2019-3-31
 * title: 189. 旋转数组
 * link: https://leetcode-cn.com/problems/rotate-array/
 */

// way 1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop())
    k--
  }
};

// way 2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var len = nums.length
  k = k - len * parseInt(k / len)
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)
};

var reverse = function (arr, start, end) {
  while (start < end) {
    var temp = arr[start]
    arr[start++] = arr[end]
    arr[end--] = temp
  }
  return arr
}
