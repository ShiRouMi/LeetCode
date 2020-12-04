// https://leetcode-cn.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function(s) {
  let dp = Array(s.length).fill([])
  let max = -1;
  let str = ''
  //这样可以遍历出所有子串, 以不同子串的开头为基准, 遍历所有子串
  for (let a = 0; a < s.length; a ++) {
    //采用不同的间隔依次遍历
    //这里 b 是子串的开始索引, m 是子串的结束索引, a + 1其实就是 子串的长度
    for (let b = 0; b + a < s.length ; b++) {
        let m = b + a;
        if ( a == 0 ) {
            dp[b][m] = true;
        } else if ( a <= 2 ) {
            dp[b][m] = s[b] == s[m]
        } else {
            dp[b][m] = ( dp[b + 1][m - 1] && s[b] == s[m] ) ? true : false;
        }
        if ( m - b > max && dp[b][m]) {
            max = m - b;
            str = s.substring(b, m + 1);
        }
        console.log(dp)
        console.log(str)
    };
  };
  return str;
}

console.log(longestPalindrome3('babad'))