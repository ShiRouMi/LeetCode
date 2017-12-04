/**
 * create by fy on 2017/12/4
 * Title：Remove Element
 * Given an array and a value, remove all instances of that value in-place and return the new length.
   Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
   The order of elements can be changed. It doesn't matter what you leave beyond the new length.
   ```
   Given nums = [3,2,2,3], val = 3,
   Your function should return length = 2, with the first two elements of nums being 2.
   ```
 * link: https://leetcode.com/problems/remove-element/description/
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var i = 0;
  for(i; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};