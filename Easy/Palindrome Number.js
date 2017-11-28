/*
create by fy on 2017/11/28
Title: Palindrome Number
Determine whether an integer is a palindrome. Do this without extra space.
link: https://leetcode.com/problems/palindrome-number/description/
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var result = parseInt(String(x).split('').reverse().join(''));
    var minInteger = Math.pow(-2, 31) + 1, maxInteger = Math.pow(2, 31) - 1;
    if (result < 0 || result > maxInteger) {
        return false;
    }
    if (result == x)
        return true;
    else
        return false;
};