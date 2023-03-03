const path = require('path');

// Basename
console.log(path.basename(__filename))

// Diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto parse
console.log(path.parse(__filename));

// join
console.log(path.join(__dirname, 'test', 'test.html'));
