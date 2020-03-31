/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let wid = matrix[0].length
  let hei = matrix.length
  if(!wid || !hei) return []
  let result = []
  let startX = 0, startY = 0, endX = wid-1, endY = hei-1

  while(endX>=startX && endY>=startY) {
      for(let x=startX; x<=endX; x++) {
          result.push(matrix[startY][x])
      }

      for(let y=startY+1; y<=endY; y++) {
          result.push(matrix[y][endX])
      }

      for(let x=endX-1; x>=startX; x--) {
          result.push(matrix[endY][x])
      }

      for(let y=endY-1; y>startY; y--) {
          result.push(matrix[y][startX])
      }

      startX++;
      startY++;
      endX--;
      endY--
  }

  return result
}; 

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))