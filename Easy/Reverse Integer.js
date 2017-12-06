/*
create by fy on 2017/11/28
Title: Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

```
Input: 123
Output:  321
```
link: https://leetcode.com/problems/reverse-integer/description/
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var maxInteger = Math.pow(2, 31) - 1, minInteger = Math.pow(-2, 31) + 1;
    var strings = String(x).split('').reverse().join('');
    var result = parseInt(strings.toString());
    if (result > maxInteger || result < minInteger) {
        return 0;
    }
    else {
        return x > 0 ? result : -result;
    }
}; 

// Does it really makes sense to emulate overflow in JavaScript?  
var reverse2 = function (x) {
    var result = 0, newResult = 0;
    var maxInteger = Math.pow(2, 31) - 1, minInteger = Math.pow(-2, 31) + 1; //
    while (x != 0 ) {
        result = x % 10;
        newResult = newResult * 10 + result;
        x = parseInt(x / 10);
    }
    if (newResult > maxInteger || newResult < minInteger) { //
        return 0;
    }                         
    return newResult;
}
reverse2(120);