/**
 * create by fy on 2017/11/29
 * Title: Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * link: https://leetcode.com/problems/valid-parentheses/description/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var i, len = s.length, result = [];
    for (i = 0; i < len; i++) {
      if (charToInt(s.charAt(i)) > 0 ) {
        result.push(s.charAt(i));
      } else {
          if ((charToInt(s.charAt(i)) + charToInt(result.pop())) != 0) {
              return false;
          }
      }
    }
    if (result.length == 0) {
        return true;
    } else {
        return false;
    }
};
var charToInt = function (c) {
    var result = 0;
    switch (c) {
        case '(':
            result = 1;
            break;
        case ')':
            result = -1;
            break;
        case '{':
            result = 2;
            break;
        case '}':
            result = -2;
            break;
        case '[':
            result = 3;
            break;
        case ']':
            result = -3;
            break;
        default:
            break;
    }
    return result;
}