// 自动导入路由文件
const requireDirectory = require('require-directory');
// Koa 路由控制，识别不同的url
const Router = require('koa-router');

class InItManger {
  static initCore(app) {
    InItManger.app = app;
    InItManger.initLoadRouters();
  }
  static initLoadRouters() {
    // 获取绝对路径
    const apiDirectory = `${process.cwd()}/app/api`;
    //使用 require-directory 提供的方法导入自动导入路由文件
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    });

    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InItManger.app.use(obj.routes());
      }
    }
  }
}

module.exports = InItManger;
