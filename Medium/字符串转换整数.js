/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let trimStr = str.trim()
  let char = trimStr[0]
  if(!(char === '+' || char === '-' || (+char >=0 && +char <=9))) {
      return 0
  }
  let output = char === '+' ? '' : char
  let arr = trimStr.split('')
  for(let i=1, len=arr.length; i<len; i++) {
      let val = trimStr[i]
      if(+val >=0 && +val <=9  && val !== ' ') {
          output +=val
      } else {
          break
      }
  }
  if(output === '+' || output === '-') return 0
  if(+output > Math.pow(2, 31) - 1 || +output < Math.pow(-2, 31)) {
      return +output > 0 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31)
  }
  return output
};

console.log(myAtoi("   +0 123"))