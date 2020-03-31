// 归并排序
// 时间复杂度 nlogn
function mergeSort(arr) {
  if(arr.length <=1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []

  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}


console.log(mergeSort([2, 1, 3]))