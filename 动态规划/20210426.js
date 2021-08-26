
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE)
  dp[0] = 0
  for(let i = 1; i<amount+1; i++) {

    for(let coin of coins) {
      if(i >=coin && dp[i-coin] !== -1) {
        dp[i] = Math.min(dp[i-coin] + 1, dp[i])
      }
    } 
    
    if(dp[i] === Number.MAX_VALUE) dp[i] = -1
  }

  return dp[amount]
};

console.log(coinChange([1, 2, 5], 11))