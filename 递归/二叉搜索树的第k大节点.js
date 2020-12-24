// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
/** 
 * 2020-12-14
 * 因为是二叉搜索树，因此中序遍历是递增序列
 */

var kthLargest = function(root, k) {
  // 需要全局变量的存储 !!! 
  // TODO: WHY?
  let result = null
  
  function recursion(node) {
    if(!node) return 
    recursion(node.right)
    k--
    if(k === 0) {
      result = node.val
      return
    }
    recursion(node.left)
  }
  recursion(root)

  return result
};

/**
 * 另一种方式
 * 先中序遍历，然后再取值
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
 * @param {number} k
 * @return {number}
 */

var kthLargest = function(root, k) {
  let result = inorderTraversal(root)
  return result[result.length - k]
};

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
}