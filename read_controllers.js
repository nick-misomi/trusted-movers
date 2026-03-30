const fs = require('fs');

console.log('=== quoteController.js ===');
console.log(fs.readFileSync('server/controllers/quoteController.js', 'utf8'));

console.log('\n\n=== contactController.js ===');
console.log(fs.readFileSync('server/controllers/contactController.js', 'utf8'));
