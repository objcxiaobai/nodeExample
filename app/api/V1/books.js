const Router = require('koa-router');
const router = new Router();
const { Books } = require('../../../models/books');
const { Success, ParameterException } = require('../../../core/http-exception');

router.get('/v1/books', (ctx, next) => {
  console.log(ctx.request.url);
  ctx.body = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' }
  ];
});

router.post('/v1/books', async (ctx, next) => {
  // 引入库
  //koa-bodyparser
  //app.use(xxx()) 这样才返回函数，才能正确注册。
  const body = ctx.request.body; // body
  if (JSON.stringify(body) === '{}') {
    // 跳转到全局拦截
    throw new ParameterException();
  }

  console.log(body);
  // 假设都有值，没有做拦截
  await Books.addBooks(body);

  throw new Success();
});

module.exports = router;
