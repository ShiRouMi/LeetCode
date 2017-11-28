/*
created by fy on 2017/11/28
Title: Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
link: https://leetcode.com/problems/longest-common-prefix/description/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) 
        return '';
    var i = 1, j, length = strs.length;
    var prefix = strs[0];
    for (i; i < length; i++) {
       var len = prefix.length > strs[i].length ? strs[i].length : prefix.length;
       for (j = 0; j < len; j++) {
           if (prefix[j] != strs[i][j]) {
               break;
           }
       }
        prefix = prefix.substr(0,j);
    }
    return prefix;
};