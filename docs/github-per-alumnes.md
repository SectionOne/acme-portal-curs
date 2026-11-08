# Com treballar amb el repositori d’aula (alumnes)

El professor us donarà una **URL** del tipus:

```text
https://github.com/SectionOne/acme-portal-curs
```

Aquesta és la plantilla oficial del curs. Al fer fork, la URL passarà a ser la del **vostre** usuari.

## Opció recomanada: Fork + clone

### 1) Fork (còpia al teu GitHub)

1. Obre la URL del repo del professor al navegador (has d’estar connectat a GitHub).  
2. Clica el botó **Fork** (dalt a la dreta).  
3. Confirma el fork al **teu** compte.  
4. Ara tens una URL pròpia, per exemple:  
   `https://github.com/EL_TEU_USUARI/acme-portal-curs`

### 2) Clone a l’ordinador

Obre un terminal (PowerShell o el de Cursor) i executa (canvia la URL per la del **teu** fork):

```bash
cd Documents
git clone https://github.com/EL_TEU_USUARI/acme-portal-curs.git
cd acme-portal-curs
```

### 3) Obrir a Cursor i arrencar

1. Cursor → **File → Open Folder…** → tria `acme-portal-curs`.  
2. Al terminal de Cursor:

```bash
copy .env.example .env
npm install
npm test
npm start
```

3. Navegador: http://localhost:3000

**Important:** el fitxer `.env` no s’ha de pujar mai a GitHub (ja està al `.gitignore`).

## Opció alternativa: “Use this template”

Si el professor ha marcat el repo com a **Template**:

1. Obre la URL del repo.  
2. Clica **Use this template** → **Create a new repository**.  
3. Posar-li un nom (p. ex. `acme-portal-curs-nomcognom`).  
4. Després `git clone` de **la teva** URL nova (igual que amunt).

## Com entregar amb Pull Request (des de la unitat 01 / 02)

1. Crea una branca (exemple unitat 01):

```bash
git checkout -b fix/unitat-01-modes
```

2. Fes els canvis amb Cursor, després:

```bash
git add .
git status
git commit -m "fix: unitat 01 modes (clients rapids + contacte urgent)"
git push -u origin fix/unitat-01-modes
```

3. Al GitHub (el teu fork), clica **Compare & pull request**.  
4. Omple la plantilla de la PR.  
5. Si el professor ho indica: obre la PR **cap al teu fork** (base = `main` del teu repo) perquè la pugui revisar, **o** cap al repo d’entregues del centre (us ho diran a classe).

La CI (`npm test`) s’executa sola a la PR. La marca verda vol dir que els tests passen; **no** és la nota final.

## Si Git falla a classe

Digues-ho al formador. Hi ha una via de contingència amb còpia de carpetes locals (unitat 02), però el camí normal del curs és **fork + clone + branques + PR**.
