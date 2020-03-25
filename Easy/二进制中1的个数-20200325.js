/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0, remain = 0
  if(n <=1) return n
  while(n>1) {
      remain = n%2
      remain === 1 && count++
      n = (n-remain)/2
  }
  return count++
};

console.log(hammingWeight(11))