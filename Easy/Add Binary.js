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
  var sum = binarySum(a) + binarySum(b);
  return binaryGetRidOf(sum);
};
var binarySum  = function (num) {
  var len = num.length, i, sum = 0;
  for(i = 0; i < len; i++) {
    sum = sum +  num[len - 1 - i] * Math.pow(2, i);
  }
  return sum;
}
var binaryGetRidOf = function (sum) {
  var remainder = sum % 2, discuss = parseInt(sum / 2) ,result = [];
  result.push(remainder);
  while (discuss != 0) {
    remainder = discuss % 2;
    result.unshift(remainder);
    discuss = parseInt(discuss / 2);
  }
  return result.join('');
}
addBinary('11', '1');
//binarySum ('10');
addBinary(binarySum("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101") + binarySum("110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

// 不符合