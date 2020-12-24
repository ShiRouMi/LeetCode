// https://leetcode-cn.com/problems/subsets/
/** 
 * 在递归过程中添加元素，在回溯的时候删除元素，能够提升时间效率
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [[]]
  
  function dfs(start, arr) {
    for(let i=start, len=nums.length; i<len; i++) {
      arr.push(nums[i])
      result.push([...arr])
      dfs(i+1, arr)
      arr.pop() // 回溯  没有懂。。。
    }
  }

  dfs(0, [])

  return result
};



console.log(subsets([1,2,3]))