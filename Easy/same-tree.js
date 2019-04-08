/**
 * create by shiroumi in 2019-4-8
 * title: 100. Same Tree
 * link: https://leetcode-cn.com/problems/same-tree/
 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  }

  if (p !== null & q !== null && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
};
// 92 ms	33.5 MB
