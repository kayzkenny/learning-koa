const koa = require("koa");
const app = new koa();

// add a date method to the context
app.context.userData = {
  first: "Manny",
  last: "Henri",
};

// log
app.use(async (ctx, next) => {
  await next();
  const responseTime = ctx.response.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const milisecond = Date.now() - start;
  ctx.set("X-Response-Time", `${milisecond}ms`);
});

// response
app.use(async (ctx) => {
  ctx.response.body = await ctx.userData;
});

app.listen(3000);
