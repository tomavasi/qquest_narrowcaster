import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: 'https://gateway.apiportal.ns.nl',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  });

  return proxy(req, res);
};
