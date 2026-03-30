const fs = require('fs');
const path = require('path');

let report = '=== FULL DIAGNOSIS REPORT ===\n\n';

// Check server/.env
report += '1. server/.env\n';
report += '   Exists: ' + fs.existsSync('server/.env') + '\n';
if (fs.existsSync('server/.env')) {
  const env = fs.readFileSync('server/.env', 'utf8');
  const lines = env.split('\n').filter(l => l.trim());
  lines.forEach(l => {
    const idx = l.indexOf('=');
    if (idx > 0) {
      const key = l.substring(0, idx);
      const isSecret = key.toUpperCase().includes('PASSWORD') || 
                       key.toUpperCase().includes('KEY') || 
                       key.toUpperCase().includes('SECRET') ||
                       key.toUpperCase().includes('URI');
      const val = l.substring(idx + 1);
      report += '   ' + key + '=' + (isSecret ? '<REDACTED>' : val) + '\n';
    }
  });
}

// Check server/api/index.js
report += '\n2. server/api/index.js\n';
report += '   Exists: ' + fs.existsSync('server/api/index.js') + '\n';
if (fs.existsSync('server/api/index.js')) {
  const content = fs.readFileSync('server/api/index.js', 'utf8');
  const hasMongoose = content.includes('mongoose');
  const hasConnect = content.includes('mongoose.connect') || content.includes('connect(');
  const hasExport = content.includes('module.exports') || content.includes('export');
  report += '   Uses mongoose: ' + hasMongoose + '\n';
  report += '   Has connect call: ' + hasConnect + '\n';
  report += '   Has module.exports: ' + hasExport + '\n';
}

// Check server/config/db.js
report += '\n3. server/config/db.js\n';
report += '   Exists: ' + fs.existsSync('server/config/db.js') + '\n';
if (fs.existsSync('server/config/db.js')) {
  const content = fs.readFileSync('server/config/db.js', 'utf8');
  const hasGlobalCache = content.includes('global.mongoose') || content.includes('global.cached');
  const hasMongoose = content.includes('mongoose');
  report += '   Uses global cache: ' + hasGlobalCache + '\n';
  report += '   Uses mongoose: ' + hasMongoose + '\n';
  // Save first 100 chars to check pattern
  report += '   First 200 chars: ' + content.substring(0, 200).replace(/\n/g, ' ') + '\n';
}

// Check vercel.json
report += '\n4. vercel.json\n';
report += '   Exists: ' + fs.existsSync('vercel.json') + '\n';
if (fs.existsSync('vercel.json')) {
  const v = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  report += '   Routes: ' + JSON.stringify(v.routes) + '\n';
  report += '   Builds: ' + JSON.stringify(v.builds) + '\n';
}

report += '\n=== END REPORT ===';

fs.writeFileSync('full_report.txt', report);
console.log('Report written to full_report.txt');
