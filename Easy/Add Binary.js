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

// ERROR ONE:

// var addBinary = function (a, b) {
//   var sum = binarySum(a) + binarySum(b);
//   return binaryGetRidOf(sum);
// };
// var binarySum  = function (num) {
//   var len = num.length, i, sum = 0;
//   for(i = 0; i < len; i++) {
//     sum = sum +  num[len - 1 - i] * Math.pow(2, i);
//   }
//   return sum;
// }
// var binaryGetRidOf = function (sum) {
//   var remainder = sum % 2, discuss = parseInt(sum / 2) ,result = [];
//   result.push(remainder);
//   while (discuss != 0) {
//     remainder = discuss % 2;
//     result.unshift(remainder);
//     discuss = parseInt(discuss / 2);
//   }
//   return result.join('');
// }
// addBinary('11', '1');
// //binarySum ('10');
// addBinary(binarySum("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101") + binarySum("110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

// 不符合
// ERROR TWO

// var addBinary = function (a, b) {
//   var arr = a.split(''), brr = b.split('');
//   var alen = arr.length, blen = brr.length
//   var len = alen < blen ? alen : blen;
//   var result = alen > blen ? arr : brr;
//   var i, flag = 0, count;
//   for (i = len - 1; i >= 0; i--) {
//     count = parseInt(arr[i]) + parseInt(brr[i]) + flag;
//     if (count % 2 == 0) {
//       result[result.length - i] = '0';
//       flag = 1;
//     } else {
//       result[result.length - i] = '1';
//       flag = 0;
//     }
//   }
//   while (flag === 1) {
//     if ((result.length - len) == 1) {
//       if ((parseInt(result[result.length - len -1]) + flag) % 2 == 0) {
//         result[result.length - len - 1] = '0';
//         flag = 1;
//       } else {
//         flag = 0;
//       }
//       len++;
//     } else {
//       result.unshift('1');
//       flag = 0;
//     }
//   }
//   return result;
// };
// addBinary('111', '1');