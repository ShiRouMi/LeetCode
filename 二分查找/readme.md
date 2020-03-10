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
	let len = array.length, left = 0, right = len -1
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