/*
create by fy on 2017/11/27
Title: Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
```js
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
link: https://leetcode.com/problems/two-sum/description/
*/

// no thought for mistake

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var arr = [];
    for (var i = 0, length = nums.length; i < length - 1; i++) {
        for (var j = i + 1; j <= length - 1; j++) {
            if ((nums[i] + nums[j]) == target) {
                arr.push(i, j);
            }
        }
    }
    return arr;
};

var twoSum2 = function (nums, target) {
    var list = nums.slice().sort((a, b) => a - b);
    var small = 0, large = nums.length - 1;
    while (small <= large) {
        if (list[small] + list[large] === target) break;
        else if (list[small] + list[large] < target) {
            small ++;
        } else {
            large --;
        }
    }
    return [nums.indexOf(list[small]),nums.indexOf(list[large])];
}