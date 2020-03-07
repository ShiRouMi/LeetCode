# LeetCode

做题详情：https://leetcode-cn.com/u/shiroumi/

### 目录
- 时间复杂度&空间复杂度
- 查找算法
  - 二分查找
- 尾调用&尾递归
- 按位操作符
- 背包问题

### 时间复杂度
时间频度：一个算法中的`语句执行次数`。`T(n)` n为问题的规模

时间复杂度: 为了估算算法需要的运行时间 和 简化算法分析<br>
`T(n) = O(f(n))` 辅助函数f(n)，使得n趋近于无穷大时候，T(n)/f(n)的极限值为不等于零的常数，称f(n)是T(n)的同数量级函数<br>

常见的时间复杂度有：常数阶`O(1)`,对数阶O(log2<sup>n</sup>),线性阶`O(n)`,线性对数阶O(nlog2<sup>n</sup>),平方阶O(n<sup>2</sup>), 立方阶O(n<sup>3</sup>),...， k次方阶O(n<sup>k</sup>),指数阶O(2<sup>n</sup>)

时间复杂度按优劣排差不多集中在：
O(1), O(log n), O(n), O(n log n), O(n2), O(nk), O(2n)

## 查找算法
### 二分查找法
主要解决「在一堆数据中找出指定的数」

前提条件：数据存储在数组中，是有序排列的。二分查找可以使用「递归」方式或者「非递归」方式

使用二分查找法要注意边界情况，有以下查询情况
- 给定一个有序的数组，查找value第一次出现的下标，不存在返回-1
- 给定一个有序的数组，查找最接近value且大于value的数的下标（如果该数存在多个，返回第一个下标），不存在返回-1。

```js
// 递归方式
function bsearch(array, left, right, value) {
  if(left > right) return 
  mid = parseInt((left + right) / 2)
  if(array[mid] > value) {
    return bsearch(array, left, mid -1, value)
  } else if(array[mid] < value) {
    return bsearch(array, mid + 1, right, value)
  }

  return mid
}

// 非递归方式
function BinarySearch(array, value) {
	let len = array.length,
		left = 0,
		right = len -1
		while(left < right) {
			let middle = left + ((right - left) >> 1) // 防止溢出，移位也更高效
			if(array[middle] > value) {
				right = middle -1
			} else if(array[middle] < value) {
				left = middle + 1
			} else {
				return middle
			}
		}
		return -1
}
```

### 按位操作符
`a & b` `a | b` `a ^ b` `~ a` `a << b` `a >> b` `a >>> b`

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#>>_(有符号右移)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E_(%E6%9C%89%E7%AC%A6%E5%8F%B7%E5%8F%B3%E7%A7%BB))

### 尾递归
函数中所有递归形式的调用都出现在函数的末尾，即递归函数是尾递归的。当递归调用是整个函数体中最后执行的语句且它的返回值不属于表达式的一部分时，这个递归调用就是尾递归。
[尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

### 背包问题
- [0-1背包问题—动态规划求解](https://www.cnblogs.com/Anker/archive/2013/05/04/3059070.html)
- [动态规划之背包问题（一）](http://www.hawstein.com/posts/dp-knapsack.html)

### 牛顿法
[如何通俗易懂地讲解牛顿迭代法？](http://www.matongxue.com/madocs/205.html#/madoc)
[求牛顿开方法的算法及其原理，此算法能开任意次方吗?](https://www.guokr.com/question/461510/)

### 理解时间复杂度和空间复杂度 

* 时间复杂度

* 空间复杂度

一个程序的空间负责度是指运行完一个程序所需`内存`的大小。<br>
程序执行时所需存储空间包括以下两部分：<br>
（1）固定部分： 指令空间（代码空间） 数据空间（常量 简单变量）等所占的空间<br>
（2）可变空间： 动态分配的空间，以及递归栈所需的空间，`与算法有关`<br>
一个算法所需的存储空间用f(n)表示。 `S(n) = O(f(n))`

学习参考： <br>
[What is a plain English explanation of “Big O” notation?](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)<br>
[算法复杂度分析概要](https://www.61mon.com/index.php/archives/176/)<br>
[维基百科: 大O符号](https://zh.wikipedia.org/wiki/%E5%A4%A7O%E7%AC%A6%E5%8F%B7)
[时间复杂度和空间复杂度详解](http://blog.csdn.net/booirror/article/details/7707551/)


## 延伸链接
[数据结构和算法必知必会的50个代码实现](https://github.com/wangzheng0822/algo)
