// https://leetcode-cn.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 
 * 哈希表存储数组中所有元素，使用哈希表查询当前元素左右两边的序列数字是否存在
 */
var longestConsecutive = function(nums) {
  let result = 0
  let set = new Set(nums)

  for(let val of nums) {
    if(set.has(val)) {
      let len = 1
      let tmp = val

      while(set.has(--tmp)) {
        len++
        set.delete(tmp)
      }

      tmp = val

      while(set.has(++tmp)) {
        len++
        set.delete(tmp)
      }

      result = Math.max(result, len)
    }
  }

  return result
};
console.log(longestConsecutive([100,4,200,1,3,2]))