/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if(n===0) return 0
  let res = [1]
  let [p2, p3, p5] = [0,0,0]
  // 后面的丑数一定是由前面的丑数乘以2、3或5得到
  // 第n个丑数一定是由前n-1个数中的某3个丑数
  // 分别乘以2、3或者5得到的数中的最小数
  for(let i=1; i<n; i++) {
    console.log(p2, p3, p5)
    res[i] = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5)
    if(res[i] === res[p2] * 2) p2++
    if(res[i] === res[p3] * 3) p3++
    if(res[i] === res[p5] * 5) p5++
    console.log('after', p2, p3, p5, res[i])
  }
  return res[res.length - 1]
};

console.log(nthUglyNumber(20))