/**
 * Auth mínima per a l'aula.
 * Token esperat: el de .env (per defecte demo-token-canvia-ho)
 */

function getExpectedToken() {
  return process.env.API_TOKEN || 'demo-token-canvia-ho';
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const [type, token] = header.split(' ');

  if (type !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Cal Authorization: Bearer <token>' });
  }

  if (token !== getExpectedToken()) {
    return res.status(403).json({ error: 'Token invàlid' });
  }

  // Exemple DOLENT a propòsit per a la unitat de rules/secrets:
  // en un entorn real MAI s'hauria de logar el token.
  // L'alumne ha d'eliminar o redactar aquesta línia als labs de governança.
  if (process.env.NODE_ENV !== 'test') {
    console.log('[auth] token rebut:', token);
  }

  return next();
}

module.exports = { requireAuth, getExpectedToken };
