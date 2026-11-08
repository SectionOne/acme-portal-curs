# ACME Portal — repositori de pràctiques (aula)

Aplicació **petita i local** per al curs *Cursor avançat*.

## 1) Obtenir el projecte (pas obligatori)

El professor us dona la URL de la plantilla, per exemple:

```text
https://github.com/SectionOne/acme-portal-curs
```

1. Feu **Fork** (o *Use this template*) al **vostre** compte GitHub.  
2. Cloneu **el vostre** fork:

```bash
git clone https://github.com/EL_TEU_USUARI/acme-portal-curs.git
cd acme-portal-curs
```


3. Obriu aquesta carpeta a Cursor (**File → Open Folder…**).

Guia ampliada: [`docs/github-per-alumnes.md`](docs/github-per-alumnes.md).

> Si encara no teniu la URL, el formador us la posarà a la pissarra / campus virtual.  
> Còpia local del dossier del curs (`temari-cursor-avancat/repo-practiques/…`) només és contingència.

## 2) Arrencada

Requisits: Node.js 18+, Cursor, compte GitHub.

```bash
copy .env.example .env
npm install
npm test
npm start
```

Navegador: **http://localhost:3000**

Token demo: `demo-token-canvia-ho`  
(Capçalera API: `Authorization: Bearer demo-token-canvia-ho`)

**No pugeu mai el fitxer `.env` a GitHub.**

## 3) Què és aquesta app

Portal intern fictici amb errors preparats:

- llista de clients (admin) — lenta a propòsit  
- formulari de contacte — pot fallar amb la paraula `urgent`  
- invitacions — condició de cursa  
- checkout — bug de CSS a mòbil  
- auth simple per token  

## 4) Entregar feina (branques + PR)

```bash
git checkout -b fix/unitat-01-modes
# ... canvis amb Cursor ...
git add .
git commit -m "fix: unitat 01"
git push -u origin HEAD
```

Després obriu **Pull Request** al GitHub (plantilla inclosa). La CI executa `npm test` automàticament.

## 5) Estructura

```text
acme-portal/
├── public/              # HTML/CSS/JS
├── src/                 # Express (server, app, db, auth)
├── tests/               # Jest
├── .cursor/rules/       # normes Cursor
├── .github/             # CI + plantilla de PR
├── docs/                # guies d'aula
└── package.json
```

## 6) Què NO cal

- Docker, Postgres, Kubernetes  
- Cloud Agents de pagament el primer dia  
- Pujar secrets reals
