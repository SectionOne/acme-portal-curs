# Branques obligatòries (no inventeu noms)

Cada entrega usa **exactament** aquest nom de branca. No afegiu el vostre nom, dates ni variants (`fix/...`, `feature/...`, etc.).

| Entrega | Branca (copieu tal qual) | Commit de push (exemple) |
|---------|--------------------------|--------------------------|
| Unitat 01 | `unitat-01` | `git push -u origin unitat-01` |
| Unitat 02 — ticket A (contacte) | `unitat-02a` | `git push -u origin unitat-02a` |
| Unitat 02 — ticket B (checkout) | `unitat-02b` | `git push -u origin unitat-02b` |
| Unitat 03 | `unitat-03` | `git push -u origin unitat-03` |
| Unitat 04 | `unitat-04` | `git push -u origin unitat-04` |
| Unitat 05 | `unitat-05` | `git push -u origin unitat-05` |
| Unitat 06 | `unitat-06` | `git push -u origin unitat-06` |
| Unitat 07 | `unitat-07` | `git push -u origin unitat-07` |
| Unitat 08 | `unitat-08` | `git push -u origin unitat-08` |
| Unitat 09 | `unitat-09` | `git push -u origin unitat-09` |
| Unitat 10 (capstone) | `unitat-10` | `git push -u origin unitat-10` |

## Crear la branca (patró)

```bash
git checkout main
git pull
git checkout -b unitat-XX
```

Substituïu `unitat-XX` pel valor de la taula (per a la 02 useu `unitat-02a` o `unitat-02b`).

## Pull Request

- **base:** `main` (el teu)  
- **compare:** el mateix nom de la taula (`unitat-01`, `unitat-02a`, …)  
- A la plantilla de la PR, marqueu **només** la casella d’aquesta unitat.

## CI

A les PR, Actions comprova que el nom de la branca sigui un dels de la taula. Si no coincideix, el check falla.
