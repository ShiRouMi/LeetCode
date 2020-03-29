// https://leetcode-cn.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let land = [], ocean = [], , len1 = grid.length, len2 = grid[0].length

  for(let m=0; m<len1; m++) {
    for(let n=0; n<len2; n++) {
      let val = grid[m][n]
      if( val === 0) {
        ocean.push([m, n])
      } else {
        land.push([m, n])
      }
    }
  }

  if(ocean.length === 0 || land.length === 0) {
    return -1
  }

  let max = 0

  for(let p=0; p<ocean.length; p++) {
    let min = Number.MAX_VALUE
    for(let q=0; q<land.length; q++) {
      let dis = distance(ocean[p], land[q])
      if(dis < min) {
        min = dis
      }

      if(min === 1) break
    }

    if(min > max) max = min
  }
  return max
};

function distance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}

// -----------------------------------------------
var maxDistance = function(grid) {
  let m=grid.length, n=grid[0].length
  let land = []
  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(grid[i][j] === 1) {
        land.push([i, j])
      }
    }
  }

  let hasOcean = false
  let point = null

  let dx = [0, 0 , 1, -1]
  let dy = [1, -1, 0, 0]

  while(land.length) {
    point = land.shift()
    
    let x = point[0], y = point[1]

    for(let i=0; i<4; i++) {
      let newX = x + dx[i]
      let newY = y + dy[i]
      if(newX<0 || newX>=m || newY<0 || newY >=n || grid[newX][newY] !== 0) {
        continue
      }
      grid[newX][newY] = grid[x][y] + 1
      hasOcean = true
      land.push([newX, newY])
    }
  }

  if(point === null || !hasOcean) {
    return -1
  }

  return grid[point[0]][point[1]] - 1
};

console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]))