const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-parser");
const _ = require("lodash");
const app = new Koa();
const router = new Router();
const port = 4000;

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

let posts = [
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

// GET -> default endpoint
router.get("/", (ctx) => {
  ctx.body = "Welcome to Koa Router";
});

// GET -> all posts endpoints
router.get("/posts", (ctx) => {
  ctx.body = posts;
});

// POST -> create a new post
router.post("/posts", (ctx) => {
  // get the post's id, name and content using array destructuring
  let { id, name, content } = ctx.request.body;

  // handle response when id || name || content is undefinded
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

// POST -> find a post with an id
router.get("/posts/:id", (ctx) => {
  let IDs = [];

  posts.forEach((post) => IDs.push(post.id));

  // handle response when id is not found
  IDs.includes(ctx.params.id)
    ? (ctx.body = posts.find((post) => post.id === ctx.params.id))
    : ctx.throw(400, `No post with id: ${ctx.params.id}`);
});

// DELETE -> delete a post with an id
router.del("/posts/:id", (ctx) => {
  ctx.body = _.remove(posts, (post) => post.id === ctx.params.id);
});

app.listen(port);
