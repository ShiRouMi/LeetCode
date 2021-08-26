// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let old = nums[0]
  for(let i=1; i<nums.length; i++) {
      if(nums[i] === old) {
          nums.splice(i, 1)
          i--
      } else {
          old = nums[i]
      }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let old = nums[0], m=1
  for(let i=1; i<nums.length; i++) {
      if(nums[i] !== old) {
          nums[m] = nums[i]
          m++
          old = nums[i]
      }
  }
  return m
};