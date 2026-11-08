process.env.NODE_ENV = 'test';
process.env.API_TOKEN = 'demo-token-canvia-ho';

const request = require('supertest');
const { createApp } = require('../src/app');

const app = createApp();
const auth = { Authorization: 'Bearer demo-token-canvia-ho' };

describe('ACME Portal', () => {
  test('health OK', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });

  test('clients exigeix auth', async () => {
    const res = await request(app).get('/api/clients');
    expect(res.status).toBe(401);
  });

  test('clients amb token retorna llista', async () => {
    const res = await request(app).get('/api/clients').set(auth);
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  test('contacte normal crea ticket', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ name: 'A', email: 'a@t.com', message: 'hola' });
    expect(res.status).toBe(201);
    expect(res.body.ticketId).toMatch(/^T-/);
  });

  test('contacte amb urgent falla (bug conegut)', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({ name: 'A', email: 'a@t.com', message: 'cas urgent siusplau' });
    expect(res.status).toBe(500);
  });
});
