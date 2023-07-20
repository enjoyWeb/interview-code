Array.prototype.find = function (fn) {
  let result;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    if (fn(this[i], i, this)) {
      result = this[i];
      break;
    }
  }
  return result;
}
const arr_f = [1, 2, 3, 5];
const findArr = arr_f.find(item => item > 4);
console.log(findArr);
