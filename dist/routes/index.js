'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.get('/', function (req, res) {
    return res.status(200).send('\n    Hello\n    <script src="/socket.io/socket.io.js"></script>\n    <script>\n      var socket = io();\n    </script>\n  ');
  });
};