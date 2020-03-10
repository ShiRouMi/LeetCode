/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let sortNums = nums.sort((a, b) => a-b)
  let closeTo = sortNums[0] + sortNums[1] + sortNums[2]
  
  for(let i=0, len=sortNums.length - 2; i<len; i++) {
    let cur = sortNums[i],
      l = i+1, r = sortNums.length -1

      while(l < r) {
        let sum = sortNums[l] + sortNums[r] + cur
        if( Math.abs(target - closeTo) >= Math.abs(target - sum))
          closeTo = sum
        if(sum < target) {
          l++
        } else if(sum > target) {
          r--
        } else {
          return sum
        }
      }
  }
  return closeTo
};

console.log(threeSumClosest([1,1,1,0], -100))