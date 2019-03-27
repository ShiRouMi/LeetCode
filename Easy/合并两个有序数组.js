/**
 * create by shiroumi in 2019-3-27
 * title: 88. 合并两个有序数组
 * link: https://leetcode-cn.com/problems/merge-sorted-array/
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((r1, r2) => r1 - r2);
};
// 执行用时：100 ms
// 内存消耗：34.6 MB
