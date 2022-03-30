var flag = true;
function doPrintA() {
  console.log("打印模块a的代码");
}

let moduleA = (function () {
  const obj = {};
  obj.flag = true;
  obj.doPrintA = function () {
    console.log("打印模块a的代码");
  };
  return obj;
})();
