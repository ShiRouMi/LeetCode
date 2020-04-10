// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 第一种解决方案：先排序，双指针
function twoSum(nums, target) {
  let a=0, b=nums.length-1
  let newNums = nums.slice().sort((a, b) => a - b)
  while(a < b) {
    let first = nums[a], last = nums[b]
    if(first + last > target) {
      b--
    } else if(first + last < target) {
      a++
    } else {
      return [nums.indexOf(a), nums.lastIndexOf(b)] // 注意两个值相等的情况
    }
  }
}

// 第二种方案 map
function twoSum(nums, target) {
  let map = new Map()
  for(let i=0,len = nums.length; i<len; i++) {
    let diff = target - nums[i], last = map.get(diff)
    if(last !== undefined) {
      return [i, last]
    }
    map.set(nums[i], i) 
  }
}

console.log(twoSum([2, 7, 11, 15], 9))