动态规划适用于有重叠子问题和最优子结构性质的问题

- 动态规划：从底部开始解决问题，将所有小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题
- 递归：从顶部开始将问题分解，通过解决掉所有分解的小问题来解决整个问题

### 动态规划
遍历到第 i 个元素的时候，前 i-1 个连续子数组的和加上第 i 个元素的和比第 i 个元素大，那么更新 `dp[i] = dp[i-1] + nums[i]`，否则为 `dp[i] = nums[i]`


```js
// 53 例子1
// 最大子序和--------- 最经典的使用动态规划的例子，时间复杂度为 O(n)
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