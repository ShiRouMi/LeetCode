/**
 * create by shiroumi in 2019-4-1
 * title: 350. 两个数组的交集 II
 * link: https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var arr1 = nums1.length < nums2.length ? nums1 : nums2;
  var arr2 = nums1.length < nums2.length ? nums2 : nums1;
  var result = [];
  arr1.forEach(item => {
    if (arr2.includes(item)) {
      result.push(item);
      arr2.splice(arr2.indexOf(item), 1);
    }
  });
  return result;
};
// 92 ms	33.7 MB
