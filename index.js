const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const port = 4000;

router.get("/", (ctx, next) => {
  ctx.body = "Welcome to Koa Router";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
