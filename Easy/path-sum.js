/**
 * created by shiroumi in 2019-4-7
 * title: 112. Path Sum
 * link: https://leetcode-cn.com/problems/path-sum/
 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false
  if (!root.left && !root.right && root.val === sum) return true
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};