// https://leetcode-cn.com/problems/maximum-product-subarray/
/**
 * 
 * 需要两个变量存储当前子序列的乘积的最大值与最小值
 */
var maxSubArray = function(arr) {
  let len = arr.length
  let result = arr[0]
  let max = 1, min = 1
  for(let i=0; i<len; i++) {
    let val = arr[i]
    if(val < 0) {
      let n_max = max
      max = Math.max(min * val, val)
      min = Math.min(n_max * val, val)
    } else {
      max = Math.max(max * val, val)
      min = Math.min(min * val, val)
    }
    result = Math.max(max, result)
  }
  return result
}

console.log(maxSubArray([2, 3, -2, 4, -2]))