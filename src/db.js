/**
 * Dades en memòria. Simula un magatzem sense instal·lar base de dades.
 * Cada reinici del servidor torna a l'estat inicial.
 */

const clients = [
  { id: 1, name: 'Laia Puig', company: 'NordTech', ownerId: 10, tagIds: [1, 2] },
  { id: 2, name: 'Marc Soler', company: 'Delta Soft', ownerId: 11, tagIds: [2] },
  { id: 3, name: 'Anna Ribas', company: 'Origen SL', ownerId: 10, tagIds: [1, 3] },
  { id: 4, name: 'Pol Vidal', company: 'Beta Labs', ownerId: 12, tagIds: [3] },
  { id: 5, name: 'Núria Casals', company: 'Mirall Apps', ownerId: 11, tagIds: [1] },
];

const owners = [
  { id: 10, name: 'Owner A' },
  { id: 11, name: 'Owner B' },
  { id: 12, name: 'Owner C' },
];

const tags = [
  { id: 1, label: 'enterprise' },
  { id: 2, label: 'trial' },
  { id: 3, label: 'churn-risk' },
];

/** Invitacions: email -> { token, createdAt } */
const invitations = new Map();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * BUG INTENCIONAT (rendiment): tres consultes sequencials amb retard.
 * L'alumne ha de detectar-ho en Ask i proposar parallelitzar / combinar.
 */
async function getClientsSlow() {
  await delay(400);
  const list = clients.map((c) => ({ ...c }));

  await delay(400);
  const ownerMap = Object.fromEntries(owners.map((o) => [o.id, o.name]));

  await delay(400);
  const tagMap = Object.fromEntries(tags.map((t) => [t.id, t.label]));

  return list.map((c) => ({
    id: c.id,
    name: c.name,
    company: c.company,
    owner: ownerMap[c.ownerId] || 'desconegut',
    tags: c.tagIds.map((id) => tagMap[id]).filter(Boolean),
  }));
}

/**
 * Versió ràpida (solució esperada després del lab de modes/agent).
 * No s'usa al principi: l'alumne la pot introduir quan toqui.
 */
async function getClientsFast() {
  const ownerMap = Object.fromEntries(owners.map((o) => [o.id, o.name]));
  const tagMap = Object.fromEntries(tags.map((t) => [t.id, t.label]));
  return clients.map((c) => ({
    id: c.id,
    name: c.name,
    company: c.company,
    owner: ownerMap[c.ownerId] || 'desconegut',
    tags: c.tagIds.map((id) => tagMap[id]).filter(Boolean),
  }));
}

module.exports = {
  clients,
  owners,
  tags,
  invitations,
  delay,
  getClientsSlow,
  getClientsFast,
};
