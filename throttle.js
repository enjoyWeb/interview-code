// 节流
const throttle = (fn, waiting = 1000, option) => {
  let preTime = new Date(0).getTime(),
    options = option || {
      firstTime: true,
      endTime: false
    },
    timer;
  let _throttle = (...args) => {
    let newTime = new Date().getTime();
    if (!options.firstTime) {
      if (timer) return;
      timer = setTimeout(() => {
        fn.apply(fn, args);
        timer = null;
      }, waiting);
    } else if (newTime - preTime > waiting) {
      fn.apply(fn, args);
      preTime = newTime;
    } else if (options.endTime) {
      timer = setTimeout(() => {
        fn.apply(fn, args);
        timer = null;
      }, waiting);
    }
  }
  _throttle.cancel = () => {
    preTime = 0;
    clearTimeout(timer);
    timer = null;
  }
  return _throttle;
}
