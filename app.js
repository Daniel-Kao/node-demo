/*
 * @LastEditors: kaojixiang
 */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("小芋头你好！");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
