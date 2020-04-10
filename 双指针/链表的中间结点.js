// https://leetcode-cn.com/problems/middle-of-the-linked-list/
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

/**
 * 
 * 使用两个指针 slow fast 一起遍历链表
 * 慢指针每次走一步
 * 快指针每次走两步
 * 等到快指针到达链表尾部
 * 慢指针在链表中间
 * 时间复杂度 O(N)，空间复杂度 O(1)，常数空间存储快慢指针
 */
var middleNode = function(head) {
    let fast = head, slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};