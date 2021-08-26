// https://leetcode-cn.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let len = s.length
  if(len === 0 || s[0] === '0') return 0
  let dp = new Array(len+1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for(let i=2; i<=len; i++) {
    let a = +s.slice(i - 1, i), b = +s.slice(i - 2, i)
    if(a > 0 && a < 10) dp[i] += dp[i-1]
    if(b >= 10 && b <= 26) dp[i] += dp[i-2]
  }

  return dp[len]
};

console.log(numDecodings("226"))