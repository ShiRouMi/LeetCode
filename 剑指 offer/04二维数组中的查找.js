// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
/**
 * 题意 从左到右递增 从上到下递增
 * 因此从右上角开始遍历，往左下角
 * 假如当前值小于目标值，就往下；假如当前值大于目标值，就往左
 */ 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let m = matrix.length
    if(!m) return false
    let n = matrix[0].length

    let i=0, j=n-1
    while(j>=0 && i<m) {
        let val = matrix[i][j]
        if(val === target) {
            return true
        } else if(val > target) {
            j--
        } else {
            i++
        }
    }
    return false
};