// https://leetcode-cn.com/problems/01-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var updateMatrix = function (matrix) {
//   let dx = [-1, 0, 1, 0]
//   let dy = [0, 1, 0, -1]

//   let xLen = matrix.length,
//     yLen = matrix[0].length

//   for (let m = 0; m < xLen; m++) {
//     for (let n = 0; n < yLen; n++) {
//       let val = matrix[m][n]
//       if (val === 0) continue

//       for (let i=0; i<4; i++) {
//         let newX = m + dx[i],
//           newY = n + dy[i]
//         if (newX < 0 || newX >= xLen || newY < 0 || newY >= yLen) {
//           continue
//         }
//         if (matrix[newX][newY] === 0) {
//           matrix[m][n] = 1
//           break
//         }
//       }
//     }
//   }

//   return matrix
// }

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let ans = JSON.parse(JSON.stringify(matrix))
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  let queue = []

  let xLen = matrix.length,
    yLen = matrix[0].length

  for (let m = 0; m < xLen; m++) {
    for (let n = 0; n < yLen; n++) {

      if (matrix[m][n] === 0) continue

      queue.push([m, n, 0])
      ans[m][n] = bfs()
      queue = []
    }
  }

  function bfs() {
    let step = 0

    while (queue.length > 0) {
      let val = queue.shift()
      step = val[2]
      for (let i = 0; i < 4; i++) {
        let newX = val[0] + dx[i],
          newY = val[1] + dy[i]
        if (newX < 0 || newX >= xLen || newY < 0 || newY >= yLen) {
          continue
        }
        if (matrix[newX][newY] === 0) {
          step += 1
          queue = []
          break
        }

        queue.push([newX, newY, step + 1])
      }
    }

    return step
  }
  return ans
}


console.log(
  updateMatrix([
    [0, 1, 0],
    [1, 1, 1]
  ])
)