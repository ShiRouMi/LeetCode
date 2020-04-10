/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * p,q两个指针，让p先走k步，然后p,q一起走，直到p为null
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let p = head, q = head;

  let i = 0;
  while (p) {
      if (i >= k) {
          q = q.next;
      }
      p = p.next;
      i++;
  }
  return i < k ? null : q;

};