/**
 * create by shiroumi in 2019-3-27
 * title： 268缺失数字
 * link: https://leetcode-cn.com/problems/missing-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var len = nums.length;
  var arr = Array(len);
  for (i = 0; i <= len; i++) {
    arr[i] = i;
  }
  for (let item of arr) {
    if (!nums.includes(item)) {
      return arr.indexOf(item);
    }
  }
};
// 用时：888 ms	
// 内存消耗: 37.3 MB
