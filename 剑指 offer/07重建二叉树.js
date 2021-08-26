// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
/** 
 * 根据前序/后序 + 中序 可以求出二叉树
 * 前序遍历的第一个元素是根节点，由此可以在中序遍历中分成左子树与右子树
 * 然后根据左右子树，继续递归
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null
    let root = preorder[0]
    
    let treenode = new TreeNode(root)
    let len=inorder.length
    let i=0
    for(; i<len; i++) {
        if(inorder[i] === root) {
            break;
        }
    }
    
    treenode.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
    treenode.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))

    return treenode
};
