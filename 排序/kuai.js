// 快速排序
/**
- 选择基准值(base)，原数组长度减一(基准值)，使用 splice
- 循环原数组，小的放左边(left数组)，大的放右边(right数组);
- concat(left, base, right)
- 递归继续排序 left 与 right
 */
// 时间复杂度 O(nlogn) ~ O(n2)
function quickSort(arr) {
  if(arr.length <=1) return arr

  let left = [], right = [], current = arr.splice(0, 1)

  for(let i=0, len=arr.length; i<len; i++) {
    let val = arr[i]
    if(val<current) {
      left.push(val)
    } else {
      right.push(val)
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}


console.log(quickSort([1,2,3,4,2,3,6,4,7,2,5]))