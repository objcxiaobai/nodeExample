const InItManager = require('./core/Init');
const Koa = require('koa');
const app = new Koa();
const catchError = require('./middlewares/Exception.js');
app.use(catchError);
InItManager.initCore(app);

app.listen(3000);
