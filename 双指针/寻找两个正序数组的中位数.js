/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length
  let i = 0,
    j = 0
  let newArr = []
  while (i < len1 || j < len2) {
    if (nums1[i] < nums2[j] || j == len2) {
      newArr.push(nums1[i])
      i++
    } else if (nums1[i] >= nums2[j] || i == len1) {
      newArr.push(nums2[j])
      j++
    }
  }
  let newLen = newArr.length
  if (newLen % 2 === 0) {
    let idx = newLen / 2
    return (newArr[idx] + newArr[idx + 1]) / 2
  } else {
    let idx = parseInt(newLen / 2)
    return newArr[idx]
  }
}

console.log(findMedianSortedArrays([1,3], [2]))