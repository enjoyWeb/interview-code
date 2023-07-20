Array.prototype.every = function (fn) {
  let bool = true;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    if (!fn(this[i], i, this)) {
      bool = false;
      break;
    }
  }
  return bool;
}
// 使用
const arr_e = [1, 2, 3, 5];
const everyArr = arr_e.every(item => item > 3);
console.log(everyArr);
