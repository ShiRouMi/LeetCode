// https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  nums = nums.map(i => String(i))
  fastSort(nums, 0, nums.length -1)
  return nums.join('')
};

var fastSort = function(nums, left, right) {
  if (left >= right) return;
  let index = partition(nums, left, right)
  fastSort(nums, left, index-1)
  fastSort(nums, index+1, right)
  return nums
}

var partition = function(nums, left, right) {
  let a = left
  for(let i=left; i<right; i++) {
    // '30' < '3'
      if((nums[i] + nums[right]) < (nums[right] + nums[i])) {
          [nums[i], nums[a]] = [nums[a], nums[i]]
          a++
      }
  }
  [nums[a], nums[right]] = [nums[right], nums[a]]
  return a
}