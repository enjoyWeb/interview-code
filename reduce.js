Array.prototype.reduce = function(fn, initValue) {
  let result = initValue ? initValue : this[0];
  for (let i = initValue ? 0 : 1; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    result = fn(result, this[i], i, this);
  }
  return result;
}
// 使用
const arr_r = [3, 4, 5, 6];
const reduceArr = arr_r.reduce((a, b) => {
  return a + b
}, 2);
console.log(reduceArr);
