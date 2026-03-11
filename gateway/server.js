const express = require("express");
const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", createProxyMiddleware({
  target: "http://auth:5001",
  changeOrigin: true,
  pathRewrite: (path) => `/api/auth${path}`,
  on: {
    proxyReq: fixRequestBody
  }
}));

app.listen(5000, () => {
  console.log("Gateway running on port 5000");
});