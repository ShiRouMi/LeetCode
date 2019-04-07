/**
 * created by shiroumi in 2019-4-7
 * title: 83. Remove Duplicates from Sorted List
 * link: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head
  let current = head
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
};