/**
 * create by shiroumi in 2019-4-6
 * title: 136. 只出现一次的数字
 * link: https://leetcode-cn.com/problems/single-number/
 */

/**
* @param {number[]} nums
* @return {number}
*/
var singleNumber = function (nums) {
  for (var i = 1, len = nums.length; i < len; ++i) {
    nums[0] = nums[0] ^ nums[i]
  }
  return nums[0]
};
// 使用 异或运算符 的特性


// way 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var map = new Map()

  for (var i = 0, j = nums.length; i < j; i++) {
    var val = nums[i]
    if (map.has(val)) {
      map.set(val, 2)
    } else {
      map.set(val, 1)
    }
  }
  for (let [key, val] of map.entries()) {
    if (val === 1) {
      return key
    }
  }
};