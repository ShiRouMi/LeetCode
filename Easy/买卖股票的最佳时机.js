/**
 * create bt shiroumi in 2019-3-28
 * title: 121. 买卖股票的最佳时机
 * link: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/comments/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = prices[0],
    maxDiff = prices[1] - min,
    len = prices.length
  if (len === 0 || len === 1) return 0
  for (var i = 2; i < len; i++) {
    if (prices[i - 1] < min) {
      min = prices[i - 1]
    }
    var currentDiff = prices[i] - min
    if (currentDiff > maxDiff) {
      maxDiff = currentDiff
    }
  }
  if (maxDiff <= 0) return 0
  return maxDiff
};