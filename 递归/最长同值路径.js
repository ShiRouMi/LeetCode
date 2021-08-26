/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = (root) => {
  let res = 0
  const univaluePath = (root) => {
    if (!root) return 0
    const left = univaluePath(root.left)
    const right = univaluePath(root.right)
    let leftPath = 0, rightPath = 0
    if (root.left && root.left.val == root.val) leftPath = left + 1
    if (root.right && root.right.val == root.val) rightPath = right + 1
    res = Math.max(res, leftPath + rightPath)
    return Math.max(rightPath, leftPath)
  }
  univaluePath(root)
  return res
}
let node = {
  val: 5,
  left: {
    val: 4,
    left: {
      val:1
    },
    right: {
      val: 1
    }
  },
  right: {
    val: 5,
    right: {
      val: 5
    }
  }
}
console.log(longestUnivaluePath(node))