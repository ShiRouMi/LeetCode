// https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/
// 有错 2020-12-23
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let len = s.length
  s = s.split('')
  if(len === 0) return []

  let res = []
  function dfs(s, pos) {
    if(pos === len - 1) {
      res.push(s)
      return
    }
    let set = new Set()
    for(let i=pos; i<len; ++i) {
      if(set.has(s[i])) continue
      set.add(s[i])

      swap(i, pos, s)

      dfs(s, pos + 1)

      swap(i, pos, s)
    }
  }

  dfs(s, 0)
  return res.map(i => i.join(""))
};

function swap(a, b, s) {
  let tmp = s[a]
  s[a] = s[b]
  s[b] = tmp
}

console.log(permutation("abc"))