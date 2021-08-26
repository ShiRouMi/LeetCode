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



const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: null,
  },
};

console.log(preorderTraversal(root))

/**
 * 个人分析：
 * 叶子节点为终止条件
 * 
 * 第一次调用：当 root: 为 val: 1, left : null, right: {} 时
 * 第二次调用: 当 root: 为 val: 2, left: {}, right: {}
 * 第三次调用：当 root: 为 val: 3, left: null, right: null
 * 
 * 第三次调用先递归, tree: [3], 返回到 left 里
 * 接着递归第二次调用, tree: [2, 3], 返回到 right 里
 * 最后递归第一次调用, tree: [1,2,3]
 */


 // 另一种递归方式
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
  // 1. 设置结果集
  const result = [];

  // 2. 递归遍历
  const recursion = (root) => {
    // 2.1 判断终止条件
    if (!root) {
      return;
    }

    // 2.2 前序遍历：根、左、右
    result.push(root.val);
    recursion(root.left);
    recursion(root.right);
  };
  
  recursion(root);

  // 3. 返回结果
  return result;
};