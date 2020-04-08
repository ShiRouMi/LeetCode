/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
let getSum = (num) => {
  let str = num.toString().split('')
  return str.reduce((a,b) => +a + +b, 0)
}
var movingCount = function(m, n, k) {
  let dx = [-1,0,1,0]
  let dy = [0,1,0,-1]

  let set = new Set(['0,0']);
  let queue = [[0, 0]];
  while(queue.length) {
      let [x, y] = queue.shift()

      for(let i=0; i<4; i++) {
          let nx = x + dx[i]
          let ny = y + dy[i]

          if(nx<0 || nx>=m || ny<0 || ny>=n || (getSum(nx) + getSum(ny) > k) || set.has(`${nx},${ny}`)) {
              continue
          }

          set.add(`${nx},${ny}`)

          queue.push([nx, ny])
          console.log(set)
      }
  }

  return set.size
};


console.log(movingCount(2, 3, 1))