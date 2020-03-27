/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//   let maxL = 0, dp = Array(nums.length)
//   for(let num of nums) {
//     let low = 0, high = maxL
//     while(low < high) {
//       let mid = low + parseInt((high - low) / 2)
//       if(dp[mid] < num) {
//         low = mid + 1
//       } else {
//         high = mid
//       }
//     }
//     dp[low] = num
//     if(low === maxL) 
//       maxL++
//     console.log(dp)
//   }
//   return maxL
// };

var lengthOfLIS = function(nums) {
  let len = nums.length
  if(len === 0 || len === 1) return len
  let dp = Array(len).fill(1)
  let res = 0
  for(let i=0; i<len; i++) {
      for(j=0; j<i; j++) {
        if(nums[j] < nums[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
      }
      res = Math.max(res, dp[i])
  }
  return res
};
console.log(lengthOfLIS([]))
// 用 dp[i] 表示以 nums[i] 为结尾的最长上升子序列的长度