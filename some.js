Array.prototype.some = function(fn) {
  let bool = false;
  for (let i = 0; i < this.length; i++) {
    if (!this.hasOwnProperty(i)) continue;
    if (fn(this[i], i, this)) {
      bool = true;
      break;
    }
  }
  return bool;
}
const arr_s = [1, 2, 3, 5];
const someArr = arr_s.some(item => item > 3)
console.log(someArr);
