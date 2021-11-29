/*
 * @Author: Shirtiny
 * @Date: 2021-11-09 23:03:31
 * @LastEditTime: 2021-11-29 21:45:57
 * @Description:
 */
const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const requestHandle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("/test/:id", (ctx) => {
    ctx.body = `<h1>${ctx.path} ${ctx.params.id}</h1>`;
  });

  router.get("/json", (ctx) => {
    // ctx.set("content-type", "application/json");
    ctx.body = { a: 1, b: 2 };
  });

  server.use(router.routes());

  server.use(async (context, nt) => {
    await requestHandle(context.req, context.res);
    context.respond = false;
    await nt();
  });

  server.listen(3000);
  console.log("koa listen on 3000");
});
