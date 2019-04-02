/**
 * create by shiroumi in 2019-4-2
 * title: 442. 数组中重复的数据
 * link: https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var map = new Map(),
        len = nums.length
    for(var i=0; i<len; i++) {
        var key = nums[i]
        if(map.has(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)    
        }
    }
    var result = []
    for(let [k, v] of map.entries()) {
        if (v === 2) {
            result.push(k)
        }
    }
    return result
};
// 296 ms	54.2 MB