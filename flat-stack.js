// 栈实现拉平
function flattening(arr) {
  if (!Array.isArray(arr)) return;
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    let value = stack.shift(); // 删除stack第一项，value是第一项的值
    Array.isArray(value) ? stack.push(...value) : res.push(value)
  }
  return res;
}

// 使用
const arry = [1, [11], [[111], [222]]]
const ret = flattening(arry)
console.log(ret) // Array(4) [1, 11, 111, 222]
