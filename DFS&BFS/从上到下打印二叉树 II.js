/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ans = [], queue = []
  if(!root) return ans

  queue.push(root)

  while(queue.length) {
      let len = queue.length, temp = []
      while(len) {
          let item = queue.shift()
          if(!item) continue
          temp.push(item.val)
          if(item.left) queue.push(temp.left)
          if(item.right) queue.push(temp.right)
          len--
      }
      ans.push([...temp])
      temp = []
  }
  return ans
};