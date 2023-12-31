function isArrayLike(o) {
  if (o && // o不是null、undefined等
    typeof o === 'object' && // o是对象
    isFinite(o.length) && // o.length是有限数值
    o.length >= 0 && // o.length为非负值
    o.length === Math.floor(o.length) && // o.length是整数
    o.length < 4294967296 // o.length < 2^32
  ) {
    return true;
  } else {
    return false;
  }
}

const apply = function (...args) {
  let [context, ...other] = args;
  context = context ? Object(context) : window;
  const _symbol = Symbol('特殊属性');
  context[_symbol] = this;
  let res;
  if (other) {
    if (!Array.isArray(other) && !isArrayLike(other)) {
      throw new Error('第二个参数不为数组并且不为类数组对象抛出错误')
    } else {
      res = context[_symbol](...Array.from(other));
    }
  } else {
    res = context[_symbol]();
  }
  delete context[_symbol];
  return res;
}
