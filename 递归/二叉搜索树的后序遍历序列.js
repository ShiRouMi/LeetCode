// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  return recur(postorder, 0, postorder.length - 1)
};

function recur(postorder, i, j) {
  if(i>=j) return true

  let p = i
  while(postorder[p] < postorder[j]) p++

  let m = p
  while(postorder[p] > postorder[j]) p++

  return p === j && recur(postorder, i, m-1) && recur(postorder, m, j-1)
}