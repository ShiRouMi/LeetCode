/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let arr = nums.slice().sort((a, b) => a-b), res = []
  for(let i=0,len=arr.length; i<len&&arr[i]<=0; i++) {
    let val=arr[i], diff = -val
    let a=i+1, b=arr.length-1
    // 跳过重复匹配
    if(i>0 && arr[i] === arr[i-1]) continue
    while(a < b) {
      let left = arr[a], right = arr[b]
      if(left + right > diff) {
        b--
      } else if(left + right < diff) {
        a++
      } else {
        res.push([val, left, right])
        // 跳过重复匹配
        while(arr[++a] == left);
        while(arr[--b] == right);
      }
    }
  }
  return res
};

console.log(threeSum([-2,0,0,2,2]))