/**
 * created by fy on 2017/12/4
 * Title: Remove Duplicates from Sorted Array
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
  ```
  Given nums = [1,1,2],
  Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
  It doesn't matter what you leave beyond the new length.
  ```
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function (nums) {
  var i = 0, len;
  for (i; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
var removeDuplicates2 = function (nums) {
  var i = 0, j, len;
  for (i, j = 1, len = nums.length; j < len; j++) {
    if (nums[i] != nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
removeDuplicates([1,2,2,3,3,5]);