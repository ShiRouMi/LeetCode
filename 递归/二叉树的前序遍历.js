/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let tree = []
  if(!root) return tree

  let left = preorderTraversal(root.left)
  let right = preorderTraversal(root.right)

  tree.push(root.val)

  for(let item of left) {
      tree.push(item)
  }

  for(let item of right) {
      tree.push(item)
  }

  return tree
};