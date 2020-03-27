// https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0], record = nums[0]

  for(let i=1, len=nums.length; i<len; i++) {
      let val = nums[i]
      record = Math.max(record + val, val)
      if(record > max) 
          max = record
  }

  return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))