# Guia GitHub + Cursor

Plantilla: **https://github.com/SectionOne/acme-portal-curs**

Setup **una sola vegada** abans de la Unitat 01. Les unitats no tornen a explicar Node ni el clone.

Versió amb captures: `alumne/guia-github-pas-a-pas.md` (Word).  
Branques: **[`docs/branques-obligatories.md`](branques-obligatories.md)** (noms fixos; la CI els comprova).

---

## Flux

**còpia teva → branca amb nom fix → canvis amb Cursor → commit → push → Pull Request al teu `main` → Actions (`npm test` + nom de branca) → `docs/autoavaluacio.md` → merge.**

El professor no puntua les PR.

| Paraula | Significat |
|---------|------------|
| Fork / plantilla | La teva còpia a GitHub |
| Clone | Baixar-la al PC (des de Cursor) |
| Branca | Línia de treball; **nom obligatori** `unitat-01` … `unitat-10` |
| Commit | Desa un punt amb missatge |
| Push | Puja la branca a GitHub |
| Pull Request | Demana fusionar la branca → `main` |
| Actions / CI | Executa `npm test` i valida el nom de branca |
| Merge | Acceptar la PR |

---

## Node.js

1. https://nodejs.org → **LTS**.  
2. Tanca i obre Cursor.  
3. Terminal:

```bash
node -v
npm -v
git --version
```

---

## 1) Còpia a GitHub

1. Obre la plantilla amb la teva sessió.  
2. **Use this template** o **Fork**.  
3. URL: `https://github.com/EL_TEU_USUARI/acme-portal-curs`.

---

## 2) Clonar amb Cursor

1. **File → New Window**.  
2. **Clone Repository** (o Ctrl+Shift+P → `Git: Clone`).  
3. Enganxa `https://github.com/EL_TEU_USUARI/acme-portal-curs.git` → **Open**.

Alternativa: `git clone …` i **File → Open Folder…**.

---

## 3) Arrencar

```bash
copy .env.example .env
npm install
npm test
npm start
```

http://localhost:3000 — no pujis `.env`.

---

## 4) Cicle d’una unitat

### Branques obligatòries

| Entrega | Branca |
|---------|--------|
| 01 | `unitat-01` |
| 02 A (contacte) | `unitat-02a` |
| 02 B (checkout) | `unitat-02b` |
| 03 … 10 | `unitat-03` … `unitat-10` |

No inventeu noms (`fix/...`, cognoms, dates…).

### Exemple Unitat 01

```bash
git checkout main
git pull
git checkout -b unitat-01
# ... feina ...
git status
git add src/app.js tests/app.test.js
git commit -m "fix: unitat 01 modes"
git push -u origin unitat-01
```

Si surt `.env` a `git status`, no el facis `add`.

### Pull Request

1. Al teu repo: **Compare & pull request**.  
2. **base** = `main` · **compare** = `unitat-01` (o el nom fix de la unitat).  
3. Marqueu la casella corresponent a la plantilla → **Create pull request**.

### Actions

Job **`test`**: `npm test` + nom de branca vàlid + sense `.env`.  
Vermell → corregeix, `commit` + `push` a la **mateixa** branca.

### Merge

1. Completa `docs/autoavaluacio.md`.  
2. **Merge pull request**.  
3. `git checkout main` && `git pull`.  
4. Unitat següent = branca amb el **seu** nom fix.

---

## Errors freqüents

| Problema | Solució |
|----------|---------|
| `npm` desconegut | Node LTS + reiniciar Cursor |
| permission denied a SectionOne | Clonar el teu fork/plantilla |
| PR cap a SectionOne | Crear-la des del teu repo |
| Actions i `.env` | `git rm --cached .env` + commit + push |
| CI: branca no vàlida | Usar exactament el nom de `docs/branques-obligatories.md` |
