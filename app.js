const InItManager = require('./core/Init');
const Koa = require('koa');
const app = new Koa();

InItManager.initCore(app);

app.listen(3000);
