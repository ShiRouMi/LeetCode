/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function(root) {
  let tree = []
   if(!root) return tree

   let left = inorderTraversal(root.left)
   let right = inorderTraversal(root.right)


   for(let item of left) {
       tree.push(item)
   }

   tree.push(root.val)

   for(let item of right) {
       tree.push(item)
   }

   return tree
};
