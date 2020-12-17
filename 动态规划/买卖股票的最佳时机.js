/**
 * @param {number[]} prices
 * @return {number}
 */
// 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
var maxProfit = function(prices) {
  let min = prices[0], diff=0
  for(let i=1,len=prices.length; i<len; i++) {
    if(prices[i] <= min) min = prices[i]
    diff = (prices[i] - min) > diff ? (prices[i] - min) : diff
  }
  if(diff <=0) return 0
  return diff
};

console.log(maxProfit([7,1,5,3,6,4]))