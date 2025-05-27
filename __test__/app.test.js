// app.test.js
const request = require('supertest');
const app = require('../index'); // same file you're using

describe('GET /', () => {
  it('should return a 200 and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Docker image is running/);
  });
});
