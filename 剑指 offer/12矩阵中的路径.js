/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length, col = board[0].length

  let k = 0
  for(let i=0; i<row; i++) {
    for(let j=0; j<col; j++) {
      // 找到目标路径
      if(find(board, word, i, j, row, col, k)) {
        return true
      }
    }
  }

  return false
}

var find = function (board, word, x, y, xlen, ylen, k) {
  if(x<0 || x>=xlen || y<0 || y>=ylen || board[x][y] !== work[k]) {
    return false
  }
  // 已经遍历到底部
  if(k === work.length - 1) {
    return true
  }

  let temp = board[x][y]
  board[x][y] = '-'

  let res = find(board, word, x-1, y, xlen, ylen, k+1) 
    || find(board, word, x, y+1, xlen, ylen, k+1)
    || find(board, word, x+1, y, xlen, ylen, k+1)
    || find(board, word, x, y-1, xlen, ylen, k+1)
  
  board[x][y] = temp
  return res
}