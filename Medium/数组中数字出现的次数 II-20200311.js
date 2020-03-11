/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {}
  for(let i=0, len=nums.length; i<len; i++) {
    let key = nums[i]
    if(!map[key]) {
      map[key] = 1
    } else {
      map[key] += 1
    }
  }
  for(let key in map) {
    if(map[key] === 1) {
      return key
    }
  }
};

console.log(singleNumber([3,4,3,3]))