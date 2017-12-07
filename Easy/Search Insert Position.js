/**
 * create by fy on 2017/12/7
 * Title: Search Insert Position
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
   You may assume no duplicates in the array.
 * link: https://leetcode.com/problems/search-insert-position/description/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var len = nums.length, i = 0;
  var min = nums[0], max = nums[len - 1];
  while (len > 0) {
    if (target >= max) {
      return target == max ? len -1 : len ;
    } else if (target <= min) {
      return 0;
    } else {
      len--;
      max = nums[len - 1];
    }
  }
};
searchInsert([1, 3, 5, 6], 0);