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

