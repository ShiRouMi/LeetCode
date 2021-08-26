/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if(s === null || p === null) return false
  let m = s.length, n = p.length
  let dp = new Array(m+1)
  for(let i=0; i<m+1; i++) {
    dp[i] = new Array(n+1).fill(false)
  }
  //  p 的前 j 个字符和 s 的前 i 个字符是否匹配
  dp[0][0] = true
  // 边界情况
  for(let i=0; i<n; i++) {
    if(p.charAt(i) === '*' && dp[0][i-1]) {
      dp[0][i+1] = true
    }
  }
  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      
      if(p.charAt(j) === s.charAt(i) || p.charAt(j) === '.') {
        dp[i+1][j+1] = dp[i][j]
      } else if (p.charAt(j) === '*') {

        if(p.charAt(j-1) === s.charAt(i) || p.charAt(j-1) === '.') {
          dp[i+1][j+1] = dp[i][j+1]
        } else 
          dp[i + 1][j + 1] = dp[i + 1][j - 1]
        }
      }
    }
  }
  return dp[m][n]
}
console.log(isMatch("aaa", "ab*a*c*a"))
