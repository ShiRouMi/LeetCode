// 选择排序：遍历自身以后的元素，最小的与自己调换位置, 时间复杂度 O(n2)
function selectArr(arr) {
  let len = arr.length
  let minIndex = 0
  for(let i=0; i<len; i++) {
    minIndex = i
    for(let j=i+1; j<len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
  }
  
  return arr
}

console.log(selectArr([1,2,6,4,5]))