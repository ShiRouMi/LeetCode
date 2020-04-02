/**
 * https://leetcode-cn.com/problems/game-of-life/
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 该题题意需要所有格子同步更新
// 解法1：使用额外空间
// 时间复杂度 O(mn) m行 n列
// 空间复杂度 O(mn)
var gameOfLife = function(board) {
  let rowLen = board.length
  let colLen = board[0].length
  if(!rowLen && !colLen) return null
  // 复制一份原数组，复制的这份永远不做修改
  let copyBoard = JSON.parse(JSON.stringify(board))
  let ways = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, 0],
      [1, -1]
  ]
  for(let i=0; i<rowLen; i++) {
      for(let j=0; j<colLen; j++) {
          let val = copyBoard[i][j]
          let count = 0
          for(let way of ways) {
              let new_row = i+way[0]
              let new_col = j+way[1]
              if(new_row<0 || new_row>=rowLen || new_col<0 || new_col>=colLen) {
                  continue
              }
              if(copyBoard[new_row][new_col] === 1)
                  count++
          }

          if(val === 1 && (count <2 || count > 3)) {
              board[i][j] = 0
          } else {
              if(val === 0 && count === 3) {
                  board[i][j] = 1
              }
          }
      }
  }
};

// ----------------------
// 解法2：使用额外状态
// 时间复杂度 O(mn) m行 n列
// 空间复杂度 O(1)
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let rowLen = board.length
  let colLen = board[0].length
  if(!rowLen && !colLen) return null

  let ways = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, 0],
      [1, -1]
  ]
  for(let i=0; i<rowLen; i++) {
      for(let j=0; j<colLen; j++) {
          let val = board[i][j]
          let count = 0
          for(let way of ways) {
              let new_row = i+way[0]
              let new_col = j+way[1]
              if(new_row<0 || new_row>=rowLen || new_col<0 || new_col>=colLen) {
                  continue
              }
              if(Math.abs(board[new_row][new_col]) === 1) // 绝对值，-1的情况是过去是活的，现在死了，也要算在内
                  count++
          }

          if(val === 1 && (count <2 || count > 3)) {
              board[i][j] = -1 // 过去是活的，现在是死了
          } else {
              if(val === 0 && count === 3) {
                  board[i][j] = 2 // 过去是死的，现在活了
              }
          }
      }
  }

  for(let m=0; m<rowLen; m++) {
      for(let n=0; n<colLen; n++) {
          if(board[m][n] >=1) {
              board[m][n] = 1
          } else  {
              board[m][n] = 0
          }
      }
  }
};