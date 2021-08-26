/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function (n) {
//   let res = [];
//   //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
//   const help = (cur, left, right) => {
//     if (cur.length === 2 * n) {
//       res.push(cur);
//       return;
//     }
//     if (left < n) {
//       help(cur + "(", left + 1, right)
//     }
//     if (right < left) {
//       help(cur + ")", left, right + 1);
//     }
//   };
//   help("", 0, 0);
//   return res;
// };

// console.log(generateParenthesis(2))

/**
 * @param {number} n
 * @return {string[]}
 */
let res = []
var generateParenthesis = function(n) {
    generate("", n, n)
    return res
};

var generate = function(str, left, right) {
    if(left === 0 && right === 0) {
        res.push(str)
        return 
    }
    if(left > 0) {
        generate((str + "("), left - 1, right)
    }
    if(right > left) {
        generate((str + ")"), left, right - 1)
    }
} 

console.log(generateParenthesis(1))