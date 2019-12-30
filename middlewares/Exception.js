const { HttpException } = require('../core/http-exception');

// 全局异常处理中间件
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log('全局拦截');
    //封装写法
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        requestUrl: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    } else {
      //未知异常
      ctx.body = {
        msg: '服务器错误',
        errorCode: 999,
        requestUrl: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;
