/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var postorderTraversal = function(root) {
  let tree = []
    if(!root) return tree

    let left = postorderTraversal(root.left)
    let right = postorderTraversal(root.right)


    for(let item of left) {
        tree.push(item)
    }


    for(let item of right) {
        tree.push(item)
    }

    tree.push(root.val)

    return tree
};