const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

const regex = /\(\d+\)\s?\d+-?\d+/g

// g : pega os numeros em sequencia e no arquivo todo

const match = banco.match(regex)
console.log(match)