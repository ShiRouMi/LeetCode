/**
 * created by fy on 2017/12/7
 * Title: Count and Say
 * he count-and-say sequence is the sequence of integers with the first five terms as following:
 * ```
1.     1
2.     11
3.     21
4.     1211
5.     111221

 * ```
 * link: https://leetcode.com/problems/count-and-say/description/
 */

/**
* @param {number} n
* @return {string}
*/
var countAndSay = function (n) {
    if (n === 1) {
      return '1';
    } else {
      var str = String(countAndSay(n - 1));
      var len = str.length, i = 0, count = 1, result = '';
      for (; i < len; i++) {
        if (str.charAt(i) == str.charAt(i+1)) {
          count ++;
        } else {
          result = result + count + str.charAt(i) ;
          count = 1;
        }
      }
      return result;
    }
};
countAndSay(4);