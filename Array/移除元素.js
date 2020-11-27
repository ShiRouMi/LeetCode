// https://leetcode-cn.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for(let i=0, len=nums.length; i<len; i++) {
      let value = nums[i]
      if(value === val) {
          nums.splice(i, 1)
          i--
      }
  }
  return nums.length
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i=0;
  for(let j=0,len=nums.length; j<len; j++) {
      if(nums[j] !== val) {
          nums[i] = nums[j]
          i++
      }
  }
  return i
};