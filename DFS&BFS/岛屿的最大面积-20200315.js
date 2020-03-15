/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0
  for(let i=0,len=grid.length; i<len; i++) {
    for(let j=0,ll=grid[0].length; j<ll; j++) {
      if(grid[i][j] === 1) {
        max = Math.max(DFS(grid, i, j), max)
      }
    }
  }
  return max
};

var DFS = (grid, i, j) => {
  if(i<0 || i>=grid.length
  || j<0 || j>=grid[0].length
  || grid[i][j] === 0) {
    return 0
  }

  grid[i][j] = 0
  let count = 1
  count += DFS(grid, i+1, j)
  count += DFS(grid, i-1, j)
  count += DFS(grid, i, j+1)
  count += DFS(grid, i, j-1)
  return count
}
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0]]))