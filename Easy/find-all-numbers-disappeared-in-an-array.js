/**
 * create by shiroumi in 2019-4-5
 * title: 448. 找到所有数组中消失的数字
 * link: https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var len = nums.length,
    result = [];
  for (var i = 0; i < len; ++i) {
    var idx = Math.abs(nums[i]) - 1;
    nums[idx] = nums[idx] > 0 ? -1 * nums[idx] : nums[idx];
  }
  for (var i = 0; i < len; ++i) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

// 164 ms	43.8 MB

// way two ： 不太符合题意
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var len = nums.length, result = []
  for (var i = 1; i <= len; ++i) {
    if (!nums.includes(i)) {
      result.push(i)
    }
  }
  return result
};
//9368 ms	43.4 MB