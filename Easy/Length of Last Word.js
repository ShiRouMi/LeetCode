/**
 * created by fy on 2017/12/8
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
If the last word does not exist, return 0.
```
Input: "Hello World"
Output: 5
```
 * Title: Length of Last Word
 * Link: https://leetcode.com/problems/length-of-last-word/description/
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.replace(/\s*$/g, ""); // s.trim()
  var i, len = s.length, count = 0;
  for(i = len - 1; i >= 0; i--) {
    if (s.charAt(i) != ' ') {
      count ++;
    } else {
      break;
    }
  }
  return count;
}
lengthOfLastWord("s  ");