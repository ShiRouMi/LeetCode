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


var sortArray = function(nums) {
  if (nums.length < 2) return nums;
  return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right)
  console.log(pivotIndex)
  quickSort(nums, left, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, right)
  return nums;
}

function partition (nums, left, right) {
  let b = right;
  let a = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[b]) {
      [nums[a], nums[i]] = [nums[i], nums[a]];
      a++;
    }
  }
  [nums[a], nums[b]] = [nums[b], nums[a]];
  console.log(nums)
  return a;
}

console.log(sortArray([4, 2, 7, 1, 3, 6, 5]))