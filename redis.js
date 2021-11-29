/*
 * @Author: Shirtiny
 * @Date: 2021-11-28 23:43:41
 * @LastEditTime: 2021-11-29 20:00:55
 * @Description:
 */
const Redis = require("ioredis");
const redis = new Redis({
  port: 6379,
  host: "172.30.3.5"
});

redis.keys("*").then((r) => {
  console.log(r);
});
