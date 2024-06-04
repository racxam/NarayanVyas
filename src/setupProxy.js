const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    console.log('Setting up proxy for /send-email');
    app.use(
        '/send-email',
        createProxyMiddleware({
            target: 'http://localhost:5001', // Ensure this is the correct port for your Express server
            changeOrigin: true,
            onProxyReq: (proxyReq, req, res) => {
                console.log('Proxying request:', req.method, req.url);
            },
            onError: (err, req, res) => {
                console.error('Proxy error:', err);
            }
        })
    );
};
