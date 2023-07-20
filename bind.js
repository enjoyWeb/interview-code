const _bind = function (...args) {
  let [context, ...other] = args;
  const findFn = (...params) => {
    context = new.target ? this : Object(context);
    return this.call(context, ...other, ...params);
  }
  if (this.prototype) findFn.prototype = this.prototype;
  return findFn;
}
