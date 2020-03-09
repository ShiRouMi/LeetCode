/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
  let newS = []
  for(let i=0; i<length; i++) {
    if(S.charAt(i) === ' ') {
      newS.push('%20')
    } else {
      newS.push(S.charAt(i))
    }
  }
  return newS.join('')
};

console.log(replaceSpaces("Mr John Smith    ", 13))