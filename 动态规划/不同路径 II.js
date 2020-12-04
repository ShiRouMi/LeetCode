// https://leetcode-cn.com/problems/unique-paths-ii/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length, n = obstacleGrid[0].length
  let dp = new Array(m)
  for(let i=0; i<m; i++) {
    dp[i] = new Array(n)
  }
  dp[0][0] = 1
  for(let i=1; i<m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i-1][0] === 0 ? 0 : 1
  }
  for(let j=1; j<n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 || dp[0][j-1] === 0 ? 0 : 1
  }
  for(let i=1; i<m; i++) {
    for(let j=1; j<n; j++) {
      if(obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      } else {
        dp[i][j] = 0
      }
    }
  }
  return dp[m-1][n-1]
};

console.log(uniquePathsWithObstacles([[1,0]]))