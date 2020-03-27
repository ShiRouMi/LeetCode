最大公约数

```js
const gcd = (a, b) => {
  if(b === 0) return a
  return gcd(b, a%b)
}
```

(25/10) = 商2 余 5
10 与 25 的最大公约数即 10与5 的最大公约数

参考：https://zhuanlan.zhihu.com/p/90131095