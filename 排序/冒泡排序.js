// 冒泡排序，两两比较，时间复杂度 O(n2)

function bubblingSort(arr) {
  let len = arr.length

  for(let i=len; i>0; i--) {
    for(let j=0; j<i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  
  return arr
}

console.log(bubblingSort([1,2,3,4,2,3,6,4,7,2,5]))