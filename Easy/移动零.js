/**
 * create by shiroumi in 2019-3-31
 * title: 283. 移动零
 * link: https://leetcode-cn.com/problems/move-zeroes/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var len = nums.length,
    count = 0
  for (var i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      ++count
      --i
    }
  }
  var newLen = nums.length
  for (var j = 0; j < count; j++) {
    nums[newLen + j] = 0
  }

};