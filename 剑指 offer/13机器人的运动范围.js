// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/

// 数字和相加
function getSum(num) {
  let count = 0;
  while(num) {
    count += num % 10
    num = Math.floor(num / 10)
  }
  return count
}
var movingCount = function(m, n, k) {
  // 为避免重复，只需要向右和向下两个方向
  const direct = [
    [1, 0],
    [0, 1]
  ]

  let set = new Set(['0, 0'])
  let queue = [[0, 0]]

  while (queue.length) {
    let [x, y] = queue.shift()
    let len = direct.length
    for (let i = 0; i < len; i++) {
      let offsetX = x + direct[i][0]
      let offsetY = y + direct[i][1]

      if (
        offsetX < 0 ||
        offsetX >= m ||
        offsetY < 0 ||
        offsetY >= n ||
        getSum(offsetX) + getSum(offsetY) > k ||
        set.has(`${offsetX}, ${offsetY}`)
      ) {
        continue
      }

      set.add(`${offsetX}, ${offsetY}`)
      queue.push([offsetX, offsetY])
    }
  }
  // 走过坐标的个数就是可以到达的格子数
  return set.size;
}

console.log(movingCount(2, 3, 1))