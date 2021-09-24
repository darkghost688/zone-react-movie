// const { createProxyMiddleware: proxy } = require("http-proxy-middleware");
const  createProxyMiddleware = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            // 此处的端口号要与后期数据请求的数据端一致
            target: "https://api.iynn.cn/film/api/v1",
          	pathRewrite: {
                    "^/api": "",
                },
            changeOrigin: true,
        })
    );
};