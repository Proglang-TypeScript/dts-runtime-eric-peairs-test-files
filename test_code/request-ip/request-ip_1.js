var requestIp = require('request-ip');

// inside middleware handler
var ipMiddleware = function(req, res, next) {
    var clientIp = requestIp.getClientIp(req); 
    next();
};

// on localhost you'll see 127.0.0.1 if you're using IPv4 
// or ::1, ::ffff:127.0.0.1 if you're using IPv6
