const _call = function (...args) {
  let [context, ...other] = args;
  context = context ? Object(context) : window;
  const _symbol = Symbol('特殊属性symbol');
  context[_symbol] = this;
  const res = context[_symbol](...other);
  delete context[_symbol];
  return res;
}
