const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

// Acentuação: todos significa À-ÿ
const pattern =  /^([A-Za-zÀ-ÿ]+)(\s[A-Za-zÀ-ÿ]+)+/gm

// Iniciando a linha (^ e flag m)
// grupo de palavra com ou sem acentuação
// seguido de outro grupo de palavra com ou sem acentuação mas iniciada com um espaço
// o segundo grupo pode se repetir n vezes

const match = banco.match(pattern)
console.log('grupos com espaços', match)


const patternMelhorado =  /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ])+)+/gm

// Os nomes estavam saindo nos grupos assim: ['meu', ' nome'], com o espaço no segundo nome
// Então criamos um grupo apenas para o segundo nome, ficando ['meu', ' ', 'nome']
// Finalmente dizemos que esse espaço não é para ser capturado, resultado final ['meu', 'nome']
const matchMelhorado = banco.match(patternMelhorado)
console.log('grupos sem espaços', matchMelhorado)