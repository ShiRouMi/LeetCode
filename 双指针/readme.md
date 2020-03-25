### 双指针
快慢指针，左右指针

双指针一般用于有序数组，一个放首，一个放尾，同时向中间遍历，直到两个指针相交，时间复杂度为 O(n)

大部分数组的题目，可以用双指针求解

```js
// 定义两个指针
let front = 0, tail = length - 1

// 循环结束条件
while(front < tail) {
 //...
}
```

```js
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
var middleNode = function(head) {
    let fast = head, slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
```