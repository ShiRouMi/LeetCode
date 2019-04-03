/**
 * create by shiroumi in 2019-4-3
 * title: 125. 验证回文串
 * link: https://leetcode-cn.com/problems/valid-palindrome/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var arr = s.toLowerCase().split('')
  var r = arr.filter(item => {
    return (item !== " ")
      && ((item >= 'a' && item <= 'z') || (item >= 0 && item <= 9))
  })

  if (r.join('') === r.reverse().join('')) {
    return true
  } else {
    return false
  }
};