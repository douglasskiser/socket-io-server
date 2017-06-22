'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _sockets = require('./sockets');

var _sockets2 = _interopRequireDefault(_sockets);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.Server(app);
var socket = (0, _socket2.default)(server);

(0, _routes2.default)(app);
(0, _sockets2.default)(socket);

server.listen(3000, function () {
  return console.log('listening on *:3000');
});

exports.default = app;