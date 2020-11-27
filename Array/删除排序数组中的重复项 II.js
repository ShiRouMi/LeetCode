// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let old = nums[0], count = 1
  for(let i=1; i<nums.length; i++) {
      if(nums[i] === old) {
          count++
          if(count > 2) {
              nums.splice(i, 1)
              i--
          }
      } else {
          old = nums[i]
          count = 1
      }
  }
};
