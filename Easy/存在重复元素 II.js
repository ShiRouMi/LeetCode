/**
 * create by shiroumi in 2019-3-28
 * title: 219. 存在重复元素 II
 * link: https://leetcode-cn.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var len = nums.length
  if (len <= 1) return false

  var map = new Map()
  for (var i = 0; i < len; i++) {
    var key = nums[i]
    if (map.has(key) && i - map.get(key) <= k) {
      return true
    }
    map.set(key, i)
  }
  return false
};
// 104 ms	39.9 MB

// 方式二，不推荐
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (var i = 0, j = nums.length; i < j; i++) {
    var n = k
    while (n > 0) {
      if (nums[i] === nums[i + n]) {
        return true
      } else {
        n--;
      }
    }

  }
  return false
};
// 8580 ms	36 MB