/**
 * create by shirouni in 2019-4-1
 * title: 349. 两个数组的交集
 * link: https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  var result = nums1.filter(item => nums2.includes(item));
  return [...new Set(result)];
};
// 92 ms	33.8 MB
