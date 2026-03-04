const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/api/auth", createProxyMiddleware({
  target: "http://auth:5001",
  changeOrigin: true
}));

app.listen(5000, ()=> console.log("Gateway on 5000"));