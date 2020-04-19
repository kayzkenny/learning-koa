const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const port = 4000;

const posts = [
  {
    id: "1",
    name: "PHP Developer",
    content: "Tobi Adelaja",
  },
  {
    id: "2",
    name: "Node.js Developer",
    content: "Tosn Iyiola",
  },
  {
    id: "1",
    name: "Java Developer",
    content: "Phillip Ogunye",
  },
];

router.get("/", (ctx, next) => {
  ctx.body = "Welcome to Koa Router";
});

router.get("/posts", (ctx, next) => {
  ctx.body = posts;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
