'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var onConnect = function onConnect(socket) {
  return socket.on('connection', function (clientSocket) {
    console.log('connected dude');
  });
};

exports.default = function (socket) {
  onConnect(socket);
};