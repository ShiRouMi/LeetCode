/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  let result = []
  for(let idx in a) {
      let v = a.filter((item, index) => index !== idx).reduce((c, curr) => c * curr, 1)
      result.push(v)
  }
  return result
};

console.log(constructArr([1,2,3,4,5]))