# Bugbot / checklist de review (aula)

## Zones crítiques

- `src/auth.js`
- `src/app.js` (contacte, invitacions)
- qualsevol ruta que rebi emails o tokens

## Invariants

- No logar tokens ni passwords en clar
- `/api/invitations` no ha de crear dos tokens per al mateix email
- Errors 500 han de ser excepcions reals, no paraules clau del missatge

## To dels comentaris

Concrets, amb escenari de fallada. Sense discussions d’estil cosmètic.
