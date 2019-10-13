const Koa = require('koa');
const app = new Koa();
const path=require('path');
// const route = require('koa-route');
// const serve = require('koa-static');
const static_ = require('koa-static')
app.use(static_(
    path.join(__dirname, '/微信头像')
))
app.listen(3000);