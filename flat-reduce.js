// 利用reduce实现
function flattening(arr) {
  if (!Array.isArray(arr)) return;
  return arr.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? flattening(b) : b)
  }, []);
}

// 使用
const arry = [1, [11], [[111], [222]]]
const ret = flattening(arry) // Array(4) [1, 11, 111, 222]
console.log(ret)
