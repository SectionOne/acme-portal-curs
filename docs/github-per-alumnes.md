# Com treballar amb el repositori d’aula (alumnes)

Plantilla oficial:

```text
https://github.com/SectionOne/acme-portal-curs
```

## Model d’entrega (únic)

1. Fas **fork** al **teu** GitHub.  
2. Clones el **teu** fork.  
3. Treballes en **branques**.  
4. Obres **Pull Request cap al teu propi `main`** (no cap al repo del professor).  
5. **Tú** comproves: CI verda + checklist d’autoavaluació de la unitat.  
6. Mergeges al teu `main` quan tot estigui OK.

El professor **no** corregeix PRs ni et posa nota per l’enllaç.  
**GitHub Actions** autoavalua el que pot (`npm test`, no pujar `.env`).  
La resta (modes, captures, criteris) te l’autoavalues tu amb la checklist de cada unitat.

---

## 1) Fork

1. Obre https://github.com/SectionOne/acme-portal-curs (sessió GitHub teva).  
2. **Fork**.  
3. Et queda una URL tipus: `https://github.com/EL_TEU_USUARI/acme-portal-curs`

## 2) Clone

```bash
git clone https://github.com/EL_TEU_USUARI/acme-portal-curs.git
cd acme-portal-curs
```

## 3) Obrir a Cursor i arrencar

1. **File → Open Folder…** → la carpeta clonada.  
2. Terminal:

```bash
copy .env.example .env
npm install
npm test
npm start
```

3. http://localhost:3000  

No pugeu mai `.env` a GitHub.

## 4) Entregar una unitat (exemple)

```bash
git checkout -b fix/unitat-01-modes
# ... feina amb Cursor ...
git add .
git commit -m "fix: unitat 01 modes"
git push -u origin fix/unitat-01-modes
```

Al **teu** GitHub: **Compare & pull request** → base = **el teu** `main`.  
Omple la plantilla de la PR.  
Espera la CI (**test** verd).  
Completa la checklist d’autoavaluació.  
Mergeja.

## 5) Què mira Actions i què mires tu

| Qui | Què comprova |
|-----|----------------|
| **GitHub Actions** | `npm test` passa; no hi ha `.env` al diff de la PR |
| **Tu (autoavaluació)** | Has fet els passos de la unitat, captures/proves manuals, modes correctes, etc. |

Si la CI és vermella: no mergegis. Mira el log a **Actions**, arregla i torneu a fer push a la mateixa branca.

## 6) Si Git falla a classe

Digues-ho i useu la contingència de carpetes locals (unitat 02). El camí normal és fork + PR al teu repo.
