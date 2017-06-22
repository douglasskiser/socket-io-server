import test from 'tape';
import request from 'supertest';
import app from '../index.js';

test('/* Route', t => {
  return request(app)
    .get('/')
    .expect(200)
    .end((err) => {
      t.error(err, 'NoError');
      t.end();
    });
});