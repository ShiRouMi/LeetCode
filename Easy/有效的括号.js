/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let len = s.length
  if(len % 2) return false
  for(let char of s) {
      switch(char) {
          case '(': stack.push(char)
              break
          case '{': stack.push(char)
              break
          case '[': stack.push(char)
              break
          case ')': 
              if(stack.pop() !==  '(')
                  return false
              break
          case '}': 
              if(stack.pop() !==  '{')
                  return false
              break
          case ']': 
              if(stack.pop() !==  '[')
                  return false 
              break
      }
  }
  return stack.length === 0
};

console.log(isValid("()"))