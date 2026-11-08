const tokenEl = document.getElementById('token');
const statusEl = document.getElementById('status');
const rowsEl = document.getElementById('rows');
const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', async () => {
  const started = performance.now();
  statusEl.textContent = 'Carregant…';
  statusEl.className = '';
  loadBtn.disabled = true;
  rowsEl.innerHTML = '';

  try {
    const res = await fetch('/api/clients', {
      headers: { Authorization: `Bearer ${tokenEl.value.trim()}` },
    });
    const body = await res.json();
    if (!res.ok) throw new Error(body.error || res.statusText);

    for (const c of body.data) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${c.id}</td><td>${c.name}</td><td>${c.company}</td><td>${c.owner}</td><td>${c.tags.join(', ')}</td>`;
      rowsEl.appendChild(tr);
    }
    const ms = Math.round(performance.now() - started);
    statusEl.textContent = `OK — ${body.data.length} clients en ${ms} ms`;
    statusEl.className = 'msg-ok';
  } catch (err) {
    statusEl.textContent = `Error: ${err.message}`;
    statusEl.className = 'msg-error';
  } finally {
    loadBtn.disabled = false;
  }
});
