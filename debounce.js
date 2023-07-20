// 防抖
const debounce = function (fn, waiting = 1000, immediate = true) {
  let timer, firstTime = immediate;
  let _debounce = (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (firstTime) {
      firstTime = false;
      fn.apply(fn, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(fn, args)
        timer = null;
      }, waiting)
    }
  }
  _debounce.cancel = () => {
    clearTimeout(timer);
    timer = null;
  }
  return _debounce;
}
