/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
  let up = 1, down = cont[cont.length - 1];
  for (var i = cont.length - 2; i >= 0; --i) {
    up += cont[i] * down;
    [up, down] = [down, up];
    console.log(up, down)
  }
  return [down, up];
};

console.log(fraction([3, 2, 0, 2]))