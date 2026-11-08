const fs = require('fs');
const path = require('path');

// Carrega .env de forma rudimentària (sense dependència dotenv)
function loadEnvFile() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

const { createApp } = require('./app');

const port = Number(process.env.PORT || 3000);
const app = createApp();

app.listen(port, () => {
  console.log(`ACME Portal escoltant a http://localhost:${port}`);
  console.log('Panell:     /admin.html');
  console.log('Contacte:   /contact.html');
  console.log('Checkout:   /checkout.html');
  console.log('Health:     /api/health');
});
