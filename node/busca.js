const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

const regex = /An+a/

const matchReges = banco.match(regex)
console.log(matchReges)