/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  // cur :当前字符
  // left：当前字符左括号
  // right:当前字符右括号
  const help = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return; // 结束当前递归分支
    }
    if (left < n) {
      help(cur + "(", left + 1, right)
    }
    if (right < left) {
      help(cur + ")", left, right + 1);
    }
  };
  help("", 0, 0);
  return res;
};

console.log(generateParenthesis(2))

/**
 * 流程分析
 * 当 generateParenthesis(2) 的时候
 * help("", 0, 0)
 * help("(", 1, 0)
 * help("((", 2, 0)
 * help("(()", 2, 1)
 * help("(())", 2, 2)
 * help("()", 1, 1)
 * help("()(", 2, 1)
 * help("()()", 2, 2)
 */