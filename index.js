const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-parser");

const app = new Koa();
const router = new Router();
const port = 4000;

app.use(bodyParser());

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
    id: "3",
    name: "Java Developer",
    content: "Phillip Ogunye",
  },
];

router.get("/", (ctx) => {
  ctx.body = "Welcome to Koa Router";
});

router.get("/posts", (ctx) => {
  ctx.body = posts;
});

router.post("/posts", (ctx) => {
  let { id, name, content } = ctx.request.body;

  switch (undefined) {
    case id:
      ctx.throw(400, "id is required field");
    case name:
      ctx.throw(400, "name is required field");
    case content:
      ctx.throw(400, "content is required field");
      break;
    default:
      posts.push({ id, name, content });
      ctx.body = posts;
      break;
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port);
