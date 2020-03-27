/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  if(A.length === 0) return 0
  A.sort((a, b) => a-b)
  let cnt = 0
  for(let i=0,len=A.length; i<len; i++) {
    if(A[i] >= A[i+1]) {
      cnt += A[i] - A[i+1] + 1
      A[i+1] = A[i] + 1
      console.log(A)
    }
  }
  return cnt
};

console.log(minIncrementForUnique([3,2,1,2,1,7]))