/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let map = {}
  if(deck.length<=1) return false
  for(let i=0,len=deck.length; i<len; i++) {
      let val = deck[i]
      map[val] = map[val] ? map[val] + 1 : 1
  }
  let arr = Object.values(map)
  for(let i=0, len=arr.length; i<len-1; i++) {
      let m = arr[i], n=arr[i+1]
      if(gcb(m, n) < 2) return false
  }
  return true
};

var gcb = function (a, b) {
  if(b === 0) return a
  else {
      return gcb(b, a%b)
  }
}