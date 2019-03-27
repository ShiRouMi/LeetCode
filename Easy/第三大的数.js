/**
 * create by shiroumi in 2019-3-27
 * title： 414 第三大的数
 * link: https://leetcode-cn.com/problems/third-maximum-number/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var temp = nums.sort((i, j) => i - j);
  temp = [...new Set(temp)];
  var len = temp.length;
  if (len < 3) {
    return temp[len - 1];
  } else {
    return temp[len - 3];
  }
};
// 用时：188 ms	
// 内存消耗: 38.1 MB
