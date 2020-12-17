// https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if(n<4) return n-1
  else if(n===4) return n

  let result = 1
  while(n > 4) {
      result = (result * 3) % 1000000007

      n = n-3
  }
  return (result * n ) % 1000000007
};

// 2020-12-17 显然这道题我不会