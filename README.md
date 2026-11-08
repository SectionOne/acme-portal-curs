# ACME Portal — pràctiques (aula)

App local del curs *Cursor avançat*: portal intern fictici amb bugs preparats.

## Setup i entrega

- Guia: [`docs/github-per-alumnes.md`](docs/github-per-alumnes.md)  
- **Noms de branca fixos:** [`docs/branques-obligatories.md`](docs/branques-obligatories.md) (`unitat-01` … `unitat-10`; la CI els comprova)

Plantilla: https://github.com/SectionOne/acme-portal-curs

## Arrencada ràpida (si ja has fet la guia)

```bash
copy .env.example .env
npm install
npm test
npm start
```

http://localhost:3000 · Token demo: `demo-token-canvia-ho`  
**No pugeu `.env`.**

## Contingut de l’app

- clients (admin) — lent a propòsit  
- contacte — falla amb `urgent`  
- invitacions — condició de cursa  
- checkout — bug CSS a mòbil  
- auth per token  

## Estructura

```text
public/   HTML/CSS/JS
src/      Express
tests/    Jest
.cursor/  rules
.github/  CI + plantilla de PR
docs/     guies d’aula
```
