/**
 * 
 * @param {*} n
 * 树形图的叶节点为结束条件
 * 树形图的根节点为最终返回值 
 */
function fn(n) {
  if(n<=1) return n
  return fn(n-1) + fn(n-2)
}
