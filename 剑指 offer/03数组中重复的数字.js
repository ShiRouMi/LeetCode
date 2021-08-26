// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
/** 
 * 利用 map hash 结构
*/
var findRepeatNumber = function (nums) {
  let map = new Map()
  let n = nums.length
  for (let i = 0; i < n; i++) {
    let val = nums[i]
    if (!map.has(val)) map.set(val, 1)
    else return val
  }
}
