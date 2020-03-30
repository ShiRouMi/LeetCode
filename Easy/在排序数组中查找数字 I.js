/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let map = {}
  for(let val of nums) {
      map[val] = map[val] ? map[val] + 1 : 1
  }
  for(let val in map) {
      if(val === target) {
          return map[val]
      }
  }
};

console.log(search([5,7,7,8,8,10], 8))