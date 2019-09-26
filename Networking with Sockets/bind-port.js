const net = require('net');
const server = net.createServer(function(connection) 
{

});
server.listen(5435);

// The net.createServer() method takes a callback function and returns a Server
// object. Node invokes the callback function whenever another endpoint con-
// nects. The connection parameter is a Socket object that you can use to send or
// receive data.