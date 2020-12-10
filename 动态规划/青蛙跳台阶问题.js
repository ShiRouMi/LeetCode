/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let arr = Array(n+1).fill(0)
  arr[0] = 1
  arr[1] = 1
  arr[2] = 2

  for(let i=3; i<n+1; i++) {
      arr[i] = (arr[i-1] + arr[i-2]) % 1000000007 //  跳上 1 级或 2 级台阶
  }

  return arr[n]
};

console.log(numWays(4))