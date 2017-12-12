/**
 * created by fy on 2017/12/12
 * Title: Plus One
 * 
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
  You may assume the integer do not contain any leading zero, except the number 0 itself.
  The digits are stored such that the most significant digit is at the head of the list.
 * link: https://leetcode.com/problems/plus-one/description/
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var len = digits.length, i;
  for (i = len - 1; i >= 0 ; i--) {
    if (digits[i] != 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  if (digits[0] == 0) {
    digits.unshift(1);
  }
  return digits;
};
plusOne([9,9])
plusOne([1, 2, 3, 9])