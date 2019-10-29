/*
 * @LastEditors: kaojixiang
 */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("小芋头你好buhao！");
});

app.listen(80, () => {
  console.log("server running on port 3000");
});
