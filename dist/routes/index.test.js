'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('/* Route', function (t) {
  return (0, _supertest2.default)(_index2.default).get('/').expect(200).end(function (err) {
    t.error(err, 'NoError');
    t.end();
  });
});