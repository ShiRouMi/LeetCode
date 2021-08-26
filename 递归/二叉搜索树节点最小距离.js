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
var minDiffInBST = function(root) {
 
  let res = Infinity, prev = null
  let diffInBST = (root) => {
      if(!root) return
      diffInBST(root.left)

      if(prev) res = Math.min(res, root.val - prev.val)

      prev = root

      diffInBST(root.right)
  }
  diffInBST(root)
  return res
};

let root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 6
  }
}
console.log(minDiffInBST(root))