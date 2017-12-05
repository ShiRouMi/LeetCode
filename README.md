# LeetCode
##### keep coding
#### keep coding
### keep coding
## keep coding
# keep coding

### 理解时间复杂度和空间复杂度 

* 时间复杂度

时间频度：一个算法中的`语句执行次数`。`T(n)` n为问题的规模

时间复杂度: 为了估算算法需要的运行时间 和 简化算法分析<br>
`T(n) = O(f(n))` 辅助函数f(n)，使得n趋近于无穷大时候，T(n)/f(n)的极限值为不等于零的常数，称f(n)是T(n)的同数量级函数<br>

常见的时间复杂度有：常数阶`O(1)`,对数阶O(log2<sup>n</sup>),线性阶`O(n)`,线性对数阶O(nlog2<sup>n</sup>),平方阶O(n<sup>2</sup>), 立方阶O(n<sup>3</sup>),...， k次方阶O(n<sup>k</sup>),指数阶O(2<sup>n</sup>)

* 空间复杂度

一个程序的空间负责度是指运行完一个程序所需`内存`的大小。<br>
程序执行时所需存储空间包括以下两部分：<br>
（1）固定部分： 指令空间（代码空间） 数据空间（常量 简单变量）等所占的空间<br>
（2）可变空间： 动态分配的空间，以及递归栈所需的空间，`与算法有关`<br>
一个算法所需的存储空间用f(n)表示。 `S(n) = O(f(n))`

放几张图片see see<br>

![](https://github.com/fengye9729/MarkdownPhotos/raw/master/suanfa/complex.png)

![](https://github.com/fengye9729/MarkdownPhotos/raw/master/suanfa/scale.png)

![](https://github.com/fengye9729/MarkdownPhotos/raw/master/suanfa/big-o.png)

学习参考： <br>
[What is a plain English explanation of “Big O” notation?](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)<br>
[算法复杂度分析概要](https://www.61mon.com/index.php/archives/176/)<br>
[维基百科: 大O符号](https://zh.wikipedia.org/wiki/%E5%A4%A7O%E7%AC%A6%E5%8F%B7)
[时间复杂度和空间复杂度详解](http://blog.csdn.net/booirror/article/details/7707551/)