const InItManager = require('./core/Init');
const Koa = require('koa');
const app = new Koa();
const catchError = require('./middlewares/Exception.js');
const parser = require('koa-bodyparser');
//解析body内容
app.use(parser());
app.use(catchError);
InItManager.initCore(app);

app.listen(3000);
