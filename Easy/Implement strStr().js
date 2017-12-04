/**
 * create by fy on 2017/12/4
 * Title: Implement strStr()
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * ```
   Input: haystack = "hello", needle = "ll"
   Output: 2
 * ```
 * link: https://leetcode.com/problems/implement-strstr/description/
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  var i = 0,j,len1 = haystack.length,len2 = needle.length;
  for (i; i <= len1 - len2 ; i++) {
    for(j = 0; j < len2; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) {
        break;
      }
    }
    if (j === len2) {
      return i;
    }
  }
  return -1;
};
strStr("mississippi", "issipi");  