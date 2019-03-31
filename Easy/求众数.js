/**
 * create by shiroumi in 2019-3-31
 * title: 169. 求众数
 * link: https://leetcode-cn.com/problems/majority-element/
 */

//  way 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var arr = nums.sort((i, j) => i - j)
  var index = parseInt(nums.length / 2)
  if (index >= 1) {
    return arr[index]
  } else {
    return arr[0]
  }
};

// way 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var map = new Map(),
    lenth = nums.length
  for (var i = 0; i < lenth; i++) {
    var key = nums[i]
    if (map.has(key)) {
      var value = map.get(key)
      map.set(key, ++value)
    } else {
      map.set(key, 1)
    }
  }
  for (let [key, value] of map.entries()) {
    if (value >= (lenth / 2)) {
      return key
    }
  }
};