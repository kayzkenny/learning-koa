const koa = require("koa");
const app = new koa();

// add a date method to the context
app.context.date = Date();
app.context.userData = {
  first: "Manny",
  last: "Henri",
};

// response
app.use((ctx) => {
  // use the state
  ctx.state.user = "Kehinde Akeredolu";

  // request object usage
  let from = ctx.request.method;

  // print name with date
  ctx.response.body = `Hello ${ctx.state.user} on ${ctx.date}`;

  //   ctx.response.body = ctx.userData;
  console.log(from);
});

app.listen(3000);
