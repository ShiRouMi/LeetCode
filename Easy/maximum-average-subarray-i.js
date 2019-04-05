/**
 * create by shiroumi in 2019-4-5
 * title: 643. 子数组最大平均数 I
 * link: https://leetcode-cn.com/problems/maximum-average-subarray-i/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  var len = nums.length, sum = getSum(0, k, nums), i = 1, j = k + 1

  while (j <= len) {
    var value = getSum(i, k, nums)
    sum = value > sum
      ? value
      : sum
    ++i
    ++j
  }
  return sum / k

};

var getSum = function (i, k, nums) {
  var sum = 0
  for (var m = i; m < (k + i); m++) {
    sum += nums[m]
  }
  return sum
}

// 1604 ms	42.6 MB