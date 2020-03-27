/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  let firLen = first.length, secLen = second.length, diff = firLen - secLen
  if(diff > 1 || diff < -1) return false
  let count = 0
  // 双指针
  for(let i=0, j=0; i<firLen && j<secLen; i++, j++) {
    if(first[i] !== second[j]) {
      if(diff === 1) {
        j-- /* i++, j保持 */
      } else if(diff === -1) {
        i-- /* j++, i保持 */
      }
      count++
    }
    if(count > 1) return false
  }
  return true
};

console.log(oneEditAway("islander", "slander"))