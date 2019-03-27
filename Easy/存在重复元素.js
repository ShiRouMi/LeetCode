/**
 * create by shiroumi in 2019-3-27
 * title: 217 存在重复元素
 * link: https://leetcode-cn.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  return nums.some((ele, index) => {
    return nums.indexOf(ele) !== index;
  });
};

// 3472 ms	36 MB
