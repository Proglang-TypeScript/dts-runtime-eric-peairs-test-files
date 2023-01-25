if (process.env.http_proxy) {
  var ProxyAgent = require('https-proxy-agent');
  stripe.setHttpAgent(new ProxyAgent(process.env.http_proxy));
}
