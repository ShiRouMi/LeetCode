动态规划适用于有重叠子问题和最优子结构性质的问题

- 动态规划：从**底部**开始解决问题，将所有小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题
- 递归：从**顶部**开始将问题分解，通过解决掉所有分解的小问题来解决整个问题

### 动态规划


```js
// 53 例子1
// 最大子序和--------- 最经典的使用动态规划的例子，时间复杂度为 O(n)
/*
遍历到第 i 个元素的时候，前 i-1 个连续子数组的和加上第 i 个元素的和比第 i 个元素大，那么更新 `dp[i] = dp[i-1] + nums[i]`，否则为 `dp[i] = nums[i]`
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0], record = nums[0]
    
    for(let i=1, len=nums.length; i<len; i++) {
        record = Math.max((record + nums[i]), nums[i])

        if(record > max) max = record
    }
    return max
};
```

```js
// 例子2
// 152 乘积最大子序列
// 定义两个变量存储当前子序列的乘积，一个保存最大值，一个保存最小值（包含负数的子序列）
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0], max = nums[0], min = nums[0]
    
    for(let i=1, len=nums.length; i<len; i++) {
        let val = nums[i]
        if(val < 0) {
            let n_max = max
            max = Math.max(min * val, val)
            min = Math.min(n_max * val, val)
        } else {
            max = Math.max(max * val, val)
            min = Math.min(min * val, val)
        }

        result = Math.max(max, result)
    }
    return result
};
```

```js
// 栗子3 递归与动态规划
// https://leetcode-cn.com/problems/climbing-stairs/
// 递归实现 缺点是运行效率慢，n=43时运行就超时了 重复计算多
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n
    return climbStairs(n-1) + climbStairs(n-2)
};
// dp 实现
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2
    for(let i=3; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
```