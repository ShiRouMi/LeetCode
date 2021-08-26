/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length
  if (n === 0) return 0

  let DP = new Array(n)
  DP[0] = nums[0]
  DP[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++) {
    DP[i] = Math.max(DP[i - 1], DP[i - 2] + nums[i])
  }
  return DP[n - 1]
}

console.log(rob([1, 2, 3, 1]))