// 利用flat方法封装
function flattening(arr, num = 1) {
  if (!Array.isArray(arr)) return;
  const ret = arr.flat(num);
  console.log(ret);
  return ret;
}

// 使用
const arry = [1, [11], [[111], [222]]]
flattening(arry, 0) // Array(3) [1, Array(1), Array(2)]
flattening(arry, 1) // Array(4) [1, 11, Array(1), Array(1)]
flattening(arry, 2) // Array(4) [1, 11, 111, 222]
