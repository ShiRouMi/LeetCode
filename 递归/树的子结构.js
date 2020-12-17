// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if(!A || !B) return false
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var recur = function(A, B) {
  if(!B) return true
  if(!A || A.val !== B.val) return false
  return recur(A.left, B.left) && recur(A.right, B.right)
}
// 2020-12-17 没有懂。。。