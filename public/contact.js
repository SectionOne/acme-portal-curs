document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Enviant…';
  status.className = '';

  const payload = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const body = await res.json();
    if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
    status.textContent = `Enviat. Ticket ${body.ticketId}`;
    status.className = 'msg-ok';
  } catch (err) {
    status.textContent = `Error: ${err.message}`;
    status.className = 'msg-error';
  }
});
