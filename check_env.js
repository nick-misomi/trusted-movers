const fs = require('fs');
try {
  const env = fs.readFileSync('server/.env', 'utf8');
  const lines = env.split('\n').filter(l => l.includes('='));
  const output = lines.map(l => {
    const [key, ...rest] = l.split('=');
    const val = rest.join('=');
    const isSecret = key.includes('PASSWORD') || key.includes('KEY') || key.includes('SECRET') || key.includes('URI');
    return `${key}=${isSecret && val ? '<REDACTED>' : val}`;
  }).join('\n');
  fs.writeFileSync('env_output.txt', output);
  console.log('Written to env_output.txt');
} catch(e) {
  fs.writeFileSync('env_output.txt', 'Error: ' + e.message);
}
