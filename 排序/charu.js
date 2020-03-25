// 插入排序: 将元素插入到已排序的数组中,时间复杂度 O(n2)

function insertArr(arr) {
  let len = arr.length

  for(let i=1; i<len; i++) {
     for(let j=i; j>0; j--) {
       if(arr[j] < arr[j-1]) {
         [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
       } else {
         break;
       }
     }
  }

  return arr
}

console.log(insertArr([1,2,6,4,5]))