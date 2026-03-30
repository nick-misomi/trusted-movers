const fs = require('fs');

// Read and output db.js
console.log('=== server/config/db.js ===');
console.log(fs.readFileSync('server/config/db.js', 'utf8'));

console.log('\n\n=== server/api/index.js ===');
console.log(fs.readFileSync('server/api/index.js', 'utf8'));
