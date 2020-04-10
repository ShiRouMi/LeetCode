/**
 * https://leetcode-cn.com/problems/is-subsequence/submissions/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let i = 0, j=0
  let m = s.length, n = t.length
  while(i<m && j<n) {
      if(s[i] === t[j]) {
          i++;
          j++
      }
      else j++ // 因为 t 的长度更长
  }
  return i === m // 相等说明遍历到最后了
};