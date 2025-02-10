# Código javascript
Para executar a pesquisa regex utilizando programação.
- [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [RegEx pt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

## Estrutura
Considerando a seguinte estrutura.
<pre>
root@PC-GUI:~/regex-concepts# ls -R
.:
README.md  database.csv  node

./node:
README.md  busca.js
root@PC-GUI:~/regex-concepts#
</pre>


## Execução
Executa-se o código da seguinte forma.
<pre>
PS regex-concepts> node .\node\busca.js
[
  'Anna',
  index: 482,
  input: 'Nome,E-mail,Telefone,CPF,Data de nascimento\r\n' +
    'Rogério Águas Bezerra Filho,rogerioaguas@email.com,(49) 92361-2598,83085126406,22/07/ \r\n' +
    'Cleberson Kauê Assunção Sobrinho,clebinho@email.com.br,(95) 92589-4243,18440126387,19/03/ \r\n' +
    'Francisco Chico de Dias,chico@email.com.br,(67) 92846-3472,80544915143,17/10/2004\r\n' +
    'Bóris Thiago Carrara Mendes,borio@email.com,(85) 92657-6956,48275258979,17/06/1999\r\n' +
    'Benedito Nivaldo de Cruz,beneh@email.com,(44) 92891-2952,877-691-581.68,15/12/1997\r\n' +
    'Anna Dara Brito,aninha@email.com,(64) 92967-8938,71642300721,04/03/1994\r\n' +
    'Suzana Galindo de Quintana,suzanaquintana@email.com,(28) 93481-2521,84658458594,19/11/1964\r\n' +
    'Jason Raul Burgos Leal de Azevedo,jason@email.com.br,(98) 93602-3624,826.580.743-01,13 05 1973\r\n' +
    'Julieta Correia Marin,julie@email.com,(13) 92977-7223,752.473.458-19,22111996\r\n' +
    'Berenice Sabrina Bezerra de Maldonado,berenice@email.com,(28) 3547-5161,764.682.144-67,28.03.1984',
  groups: undefined
]
PS regex-concepts>
</pre>

<pre>
PS regex-concepts> node .\node\busca_telefone.js
[
  '(49) 92361-2598',
  '(95) 92589-4243',
  '(67) 92846-3472',
  '(85) 92657-6956',
  '(44) 92891-2952',
  '(64) 92967-8938',
  '(28) 93481-2521',
  '(98) 93602-3624',
  '(13) 92977-7223',
  '(28) 3547-5161'
]
PS regex-concepts>
</pre>

## Quantificadores
`const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g`
quantificadores exatos

`const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g`
quantificadores por faixa
