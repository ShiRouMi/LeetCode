/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  let dp = Array(n+1).fill(0)
  dp[2] = 1
  for(let i=3; i<=n;i++) {
      for(let j=1; j<i; j++) {
          dp[i] = Math.max(dp[i], Math.max(dp[i-j]*j, (i-j)*j))
      }
  }
  return dp[n]
};

console.log(cuttingRope(4))