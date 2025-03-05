const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/products', createProxyMiddleware({
    target: 'http://localhost:3001/products',
    changeOrigin: true
}));

app.use('/users', createProxyMiddleware({
    target: 'http://localhost:3002/users',
    changeOrigin: true
}));

app.use('/orders', createProxyMiddleware({
    target: 'http://localhost:3003/orders',
    changeOrigin: true
}));

app.use('/customers', createProxyMiddleware({
    target: 'http://localhost:3004/customers',
    changeOrigin: true
}));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`apigateway-services is running on port ${PORT}`);
});