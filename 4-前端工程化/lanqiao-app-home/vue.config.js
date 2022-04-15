const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: {  //配置跨域
  //     '/api': {
  //       target: 'https://www.lanqiao.cn',  //这里应该填写真实的后台接口
  //       changOrigin: true,  //允许跨域
  //       pathRewrite: {
  //         /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/courses 时
  //           实际上访问的地址是：https://www.lanqiao.cn/api/v1/courses,因为重写了 /api
  //          */
  //         '^/api': '' 
  //       }
  //     },
  //   }
  // },
});
