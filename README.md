# LeetCode

做题详情：https://leetcode-cn.com/u/shiroumi/

### 时间复杂度与空间复杂度
时间频度：一个算法中的`语句执行次数`。`T(n)` n为问题的规模

时间复杂度: 为了估算算法需要的运行时间 和 简化算法分析<br>

`T(n) = O(f(n))` 辅助函数f(n)，使得n趋近于无穷大时候，T(n)/f(n)的极限值为不等于零的常数，称f(n)是T(n)的同数量级函数<br>

常见的时间复杂度有：常数阶 O(1) ,对数阶O(log2<sup>n</sup>),线性阶`O(n)`,线性对数阶O(nlog2<sup>n</sup>),平方阶O(n<sup>2</sup>), 立方阶O(n<sup>3</sup>),...， k次方阶O(n<sup>k</sup>),指数阶O(2<sup>n</sup>)

时间复杂度按优劣排差不多集中在：
O(1), O(log n), O(n), O(n log n), O(n2), O(nk), O(2n)

空间复杂度：
一个程序的空间负责度是指运行完一个程序所需`内存`的大小。<br>
程序执行时所需存储空间包括以下两部分：<br>
（1）固定部分： 指令空间（代码空间） 数据空间（常量 简单变量）等所占的空间<br>
（2）可变空间： 动态分配的空间，以及递归栈所需的空间，`与算法有关`<br>
一个算法所需的存储空间用f(n)表示。 `S(n) = O(f(n))`

### 按位操作符
`a & b` `a | b` `a ^ b` `~ a` `a << b` `a >> b` `a >>> b`

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#>>_(有符号右移)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E_(%E6%9C%89%E7%AC%A6%E5%8F%B7%E5%8F%B3%E7%A7%BB))

### 尾递归
函数中所有递归形式的调用都出现在函数的末尾，即递归函数是尾递归的。当递归调用是整个函数体中最后执行的语句且它的返回值不属于表达式的一部分时，这个递归调用就是尾递归。
[尾调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)
