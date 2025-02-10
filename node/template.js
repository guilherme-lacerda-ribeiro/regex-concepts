const fs = require('fs')
const bancoCsv = 'database1.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const pattern =  / / //sua regex vai aqui

// const patternTelefones = /\(\d{2}\)\s\d{4,5}-\d{4}/g
// const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g
// const patternCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
// const patternData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm

const match = banco.match(pattern)
console.log(match)