const path = require('path');
const express = require('express');
const cors = require('cors');
const { requireAuth } = require('./auth');
const {
  getClientsSlow,
  invitations,
  delay,
} = require('./db');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'acme-portal' });
  });

  /** Panell admin: lent a propòsit */
  app.get('/api/clients', requireAuth, async (_req, res) => {
    const data = await getClientsSlow();
    res.json({ data, meta: { count: data.length, note: 'endpoint lent (lab)' } });
  });

  /**
   * Formulari de contacte.
   * BUG: si el missatge conté la paraula "urgent" (minúscules), retorna 500.
   * Simula un bug "només en alguns casos" (com a producció intermitent).
   */
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Cal name, email i message' });
    }

    if (String(message).toLowerCase().includes('urgent')) {
      return res.status(500).json({ error: 'Error intern al processar el missatge' });
    }

    return res.status(201).json({
      ok: true,
      ticketId: `T-${Date.now()}`,
      received: { name, email },
    });
  });

  /**
   * Invitacions.
   * BUG DE CURSA: si es crida dues vegades molt ràpid amb el mateix email,
   * es poden crear dos tokens (no hi ha bloqueig / comprovació atòmica).
   */
  app.post('/api/invitations', requireAuth, async (req, res) => {
    const email = (req.body && req.body.email) || '';
    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Email invàlid' });
    }

    // Simula latència de xarxa / BD
    await delay(150);

    if (invitations.has(email)) {
      // En un fix correcte, aquí retornaríem 409 o el mateix token de forma segura.
      // Ara mateix encara hi ha una finestra de cursa abans del .has (lab unitat 10 / 02).
    }

    await delay(150);
    const token = `inv_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    invitations.set(email, { token, createdAt: Date.now() });

    return res.status(201).json({ email, token });
  });

  app.get('/api/invitations/:email', requireAuth, (req, res) => {
    const row = invitations.get(req.params.email);
    if (!row) return res.status(404).json({ error: 'No trobat' });
    return res.json(row);
  });

  return app;
}

module.exports = { createApp };
