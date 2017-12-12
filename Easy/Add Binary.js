/**
 * create by fy on 2017/12/12
 * Title: Add Binary
 * Given two binary strings, return their sum (also a binary string).
 * link: https://leetcode.com/problems/add-binary/description/
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */


var addBinary = function (a, b) {
  var a = a.split(''), b = b.split('');
  var alen = a.length, blen = b.length, carry = 0,result = [];
  for (var i = alen - 1, j = blen - 1; i >=0 || j >= 0; i--, j--) {
    var flag = (+a[i] || 0) + (+b[j] || 0) + carry;
    if (flag >= 2) {
      carry = 1;
      flag = flag - 2;
    } else {
      carry = 0;
    }
    result.unshift(flag);
  }
  if (carry === 1) {
    result.unshift(1);
  }
  return result.join('');
};
addBinary('11', '1');
