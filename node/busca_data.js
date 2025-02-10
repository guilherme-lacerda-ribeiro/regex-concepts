const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

// m - informo que meu documento é multilinha, então informo essa flag
const regex = /\d{2}[/. ]?\d{2}[/. ]?\d{4}$/gm
const matchReges = banco.match(regex)
console.log(matchReges)