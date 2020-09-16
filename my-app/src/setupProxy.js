const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/1470000/DURPrdlstInfoService',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr',
      changeOrigin: true
    })
  );
  app.use(
    '/images',
    createProxyMiddleware({
      target: 'http://www.health.kr',
      changeOrigin: true
    })
  );
};
