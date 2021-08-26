// https://leetcode-cn.com/problems/first-missing-positive/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if(nums.length === 0) return 1 
  nums = nums.sort((a,b) => b - a)
  let max = nums[0]

  for(let i=1; i<max; i++) {
      if(nums.indexOf(i) === -1) {
          return i
      }
  }
  return max > 0 ? max+1 : 1
};