/*
 * @Author: Shirtiny
 * @Date: 2021-11-09 23:03:31
 * @LastEditTime: 2021-11-09 23:58:36
 * @Description:
 */
const Koa = require("koa");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const requestHandle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  server.use(async (context, nt) => {
    await requestHandle(context.req, context.res);
    context.respond = false;
  });

  server.listen(3000);
  console.log("koa listen on 3000")
});
