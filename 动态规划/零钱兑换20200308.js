var coinChange = function (coins, amount) {
  let dp = [0]

  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Number.MAX_VALUE

    for (let coin of coins) {
      // dp[i]表示装满i数量所需要的最少硬币数
      // 状态转移方程为d[i] = math.min(dp[i],dp[i-k]+1),满足i>=k的条件即可。
      // 例如求11的硬币数，相当于求n=10,n=9,n=6的银币数中的最小值+1.
      if (i >= coin && dp[i - coin] !== -1) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i])
      }
    }

    if (dp[i] === Number.MAX_VALUE) dp[i] = -1
  }
  console.log(dp)
  return dp[amount]
};

console.log(coinChange([1, 2, 5], 11))