/**
 * created by fy on 2017/12/8
 * Title: Spiral Matrix 
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * ```
 * [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]
You should return [1,2,3,6,9,8,7,4,5].
 * ```
 * link: https://leetcode.com/problems/spiral-matrix/description/
 */

/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function (matrix) {
  var i, j;
  var n = matrix.length, m = matrix[0].length;
  var result = [];
  for (i = 0; i < n; i++) {
    if (i % 2 == 0) {
      for (j = 0; j < m ;j++) {
        result.push(matrix[i][j]);
      }
    } else {
      for(j = m - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
};
spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
// [1, 2, 3, 6, 5, 4, 7, 8, 9] 不符合题意

