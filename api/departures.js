import { createProxyMiddleware } from 'http-proxy-middleware';

const NS_KEY = 'c9af8962e10e46bc92f8e98b501a3894';

export default function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: 'https://gateway.apiportal.ns.nl//reisinformatie-api/api/v2/departures',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
    onProxyReq: (proxyReq, req, res) => {
      // Add your custom headers here
      proxyReq.setHeader('Ocp-Apim-Subscription-Key', `${NS_KEY}`);
      proxyReq.setHeader( 'Cache-Control', 'no-cache');
      // Add any other headers you need
    },
  });

  return proxy(req, res);
};
