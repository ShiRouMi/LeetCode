// https://leetcode-cn.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function(s) {
  let dp = [];
  for (let i = 0; i < s.length; i ++) {
      dp[i] = [];
  };

  let dp = Array(s.length).fill([])

  let max = -1;
  let str = ''
  //这样可以遍历出所有子串, 以不同子串的开头为基准, 遍历所有子串
  for (let k = 0; k < s.length; k ++) {
      //采用不同的间隔依次遍历
      //这里i 是子串的开始索引, j是 子串的结束索引, k + 1其实就是 子串的长度
      for (let i = 0; i + k < s.length ; i ++) {
          let j = i + k;
          if ( k == 0 ) {
              dp[i][j] = true;
          } else if ( k <= 2 ) {
              if ( s[i] == s[j] ) {
                  dp[i][j] = true;
              } else {
                  dp[i][j] = false;
              }
          } else {
              dp[i][j] = ( dp[i + 1][j - 1] && s[i] == s[j] ) ? true : false;
          }
          if ( j - i > max && dp[i][j]) {
              max = j - i;
              str = s.substring(i, j + 1);
          }
      };
  };
  return str;
}
