const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", createProxyMiddleware({
  target: "http://auth:5001",
  changeOrigin: true
}));

app.listen(5000, () => {
  console.log("Gateway running on port 5000");
});