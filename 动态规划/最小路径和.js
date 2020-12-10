// https://leetcode-cn.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length, n = grid[0].length

  for(let i=0; i<m; i++) {
      for(let j=0; j<n; j++) {
          if(i === 0 && j === 0) continue
          else if(i===0) grid[i][j] = grid[i][j-1] + grid[i][j]
          else if(j===0) grid[i][j] = grid[i-1][j] + grid[i][j]
          else {
              grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
          }
      }
  }
  return grid[m-1][n-1]
};