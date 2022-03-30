// CommonJS的模块管理方案是依赖于NodeJS环境的，下面的代码是无法在浏览器端执行的
let { flag, doPrintA } = require("module-d");

if (flag) {
  doPrintA();
}
