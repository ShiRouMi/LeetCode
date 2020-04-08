// https://leetcode-cn.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1
  let p2 = l2
  let carry = 0
  const dummy = new ListNode()
  let pointer = dummy
  while (p1 || p2 || carry) {
    const num1 = p1 ? p1.val : 0
    const num2 = p2 ? p2.val : 0
    const sum = num1 + num2 + carry
    if (sum > 9) {
      pointer.next = new ListNode(sum % 10)
      carry = 1
    } else {
      pointer.next = new ListNode(sum)
      carry = 0
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    pointer = pointer.next
  }
  return dummy.next
};

let obj1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}
let obj2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}
console.log(addTwoNumbers(obj1, obj2))