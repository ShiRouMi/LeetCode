/**
 * https://leetcode-cn.com/problems/divisor-game/
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  if(N == 1) {
      return false;
  }
  if(N == 2) {
      return true;
  } 
  const dp = new Array(N+1);
  dp[1] = false;
  dp[2] = true;
  for(let i = 3; i <= N; i++){
      dp[i] = false;
      for(let j = 1; j < i; j++){
          if(i % j === 0 && !dp[i - j]){
              dp[i] = true;
              break;
          }
      }
  }
  return dp[N]
};

console.log(divisorGame(4))

// 暴力破解
var divisorGame = function(N) {
  return N % 2 === 0
}