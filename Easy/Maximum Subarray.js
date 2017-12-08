/**
 * created by fy on 2017/12/8
 * Title: Maximum Subarray
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
    For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
    the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * link: https://leetcode.com/problems/maximum-subarray/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var sum = nums[0], preSum = nums[0], max = nums[0];
  var i = 1, len = nums.length;
  for(; i < len; i++) {
    if (preSum > 0) {
      preSum += nums[i];
    } else {
      preSum = nums[i];
    }
    max = Math.max(max, preSum);
  }
  return max;
};