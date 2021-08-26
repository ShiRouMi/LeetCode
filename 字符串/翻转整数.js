/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21
 */

// split reverse join
const reverse = function(x) {
  let max = Math.pow(2, 31) - 1
  let min = Math.pow(2, -31)

  let y = x > 0 ?  
    String(x)
    .split('')
    .reverse()
    .join('')
  : String(x)
    .slice(1)
    .split('')
    .reverse()
    .join('');

  let result = x > 0 ? y : -y

  return result >=min && result <=max ? result : 0
}