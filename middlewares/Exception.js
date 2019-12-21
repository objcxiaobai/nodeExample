const { HttpException } = require('../core/http-exception');

// 全局异常处理中间件
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = {
      msg: '找不到内容',
      errorCode: '500',
      requestUrl: `${ctx.method} ${ctx.path} ${error}`
    };
    ctx.status = 500;
  }
};

module.exports = catchError;
