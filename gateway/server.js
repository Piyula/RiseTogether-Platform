const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/api/auth", createProxyMiddleware({
  target: "http://auth:5001",
  changeOrigin: true,
  // Express strips the mount path, so add /api/auth back before forwarding.
  pathRewrite: (path) => `/api/auth${path}`
}));

app.listen(5000, () => {
  console.log("Gateway running on port 5000");
});