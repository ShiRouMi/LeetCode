/*
created by fy on 2017/11/28
Title: Roman to Integer
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

link: https://leetcode.com/problems/roman-to-integer/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var charToInt = function (c) {
    var result = 0;
    switch (c) {
        case "I":
            result = 1;
            break;
        case "V":
            result = 5;
            break;
        case "X":
            result = 10;
            break;
        case "L":
            result = 50;
            break;
        case "C":
            result = 100;
            break;
        case "D":
            result = 500;
            break;
        case "M":
            result = 1000;
            break;
    }
    return result;
};
var romanToInt = function (s) {
    var sum = charToInt(s.charAt(0));
    for (var i = 1, length = s.length; i < length; i++) {
        if (charToInt(s.charAt(i)) > charToInt(s.charAt(i - 1))) {
            sum = sum - 2 * charToInt(s[i - 1]) + charToInt(s[i]);
        }
        else {
            sum += charToInt(s[i]);
        }
    }
    return sum;
};