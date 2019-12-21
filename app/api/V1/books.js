const Router = require('koa-router');
const router = new Router();

router.get('/v1/books', (ctx, next) => {
  ctx.body = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' }
  ];
});

module.exports = router;
