// 快速排序
/**
- 选择基准值(base)，原数组长度减一(基准值)，使用 splice
- 循环原数组，小的放左边(left数组)，大的放右边(right数组);
- concat(left, base, right)
- 递归继续排序 left 与 right
 */
// 时间复杂度 O(nlogn) ~ O(n2)

// function quickSort(arr) {
//   if(arr.length <=1) return arr

//   let left = [], right = [], current = arr.splice(0, 1)

//   for(let i=0, len=arr.length; i<len; i++) {
//     let val = arr[i]
//     if(val<current) {
//       left.push(val)
//     } else {
//       right.push(val)
//     }
//   }
//   return quickSort(left).concat(current, quickSort(right))
// }


var sortArray = function(arr) {
  return quickSort(arr)
};
//quicksort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = ~~((right + left)>>1)
    let newPivot = partition(arr, pivot, left, right)
    quickSort(arr, left, newPivot - 1)
    quickSort(arr, newPivot + 1, right)
  }
  return arr
}
//partition
function partition(arr, pivot, left, right) {
  let pivotValue = arr[pivot]
  let newPivot = left
  swap(arr, pivot, right)
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, newPivot)
      newPivot ++
    }
  }
  swap(arr, right, newPivot)
  return newPivot
}
//swap
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
console.log(sortArray([1,2,3,4,2,3,6,4,7,2,5]))