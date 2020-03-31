// 插入排序: 将元素插入到已排序的数组中,时间复杂度 O(n2)

function insertArr(arr) {
  let len = arr.length

  for (var i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j-1]) {
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      j--;
    }
  }

  return arr
}

console.log(insertArr([1,2,6,4,5]))