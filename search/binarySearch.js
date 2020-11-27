// 查找第一个等于给定值的下标
function binarySearch(array, target) {
  let len = array.length;
  if(len === 0) return -1;
  let min = 0, max = len-1
  while(min <= max) {
    let mid = Math.floor((min + max) / 2)
    if(array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }
  return -1
}
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(binarySearch(arr, 44))