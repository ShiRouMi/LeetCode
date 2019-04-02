/**
 * create by shiroumi in 2019-4-2
 * title: 485. 最大连续1的个数
 * link: https://leetcode-cn.com/problems/max-consecutive-ones/comments/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var arr = nums.join('').split('0')
  var res = 0
  arr.map((v, idx) => {
    return res = v.length > res
      ? v.length
      : res
  })
  return res
};
// 124 ms	37 MB


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var count = 0, max = 0
  nums.forEach(item => {
    if (item === 1) {
      count = count + 1
    } else {
      max = Math.max(count, max)
      count = 0
    }
  })
  return Math.max(count, max)
};
// 双指针方法，记录最大值和当前 1 的值
// 124 ms	36.3 MB