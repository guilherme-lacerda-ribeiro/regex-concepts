# Regex Concepts
Personal studies about regex.
- Pattern (expressão)
- Target (alvo)
- Regex Engine (java, ...)
- Match (resultado)

## Sites
- [regex101](https://regex101.com/)
- [regex101-wiki](https://github.com/firasdib/Regex101/wiki/)
- https://regexr.com/
- https://www.regextester.com/
- https://www.freeformatter.com/regex-tester.html
- https://www.regexpal.com/
- https://www.phpliveregex.com/

## Grep
Global Regular Expression Print.
[Documentação](https://www.gnu.org/software/grep/manual/grep.html)

`grep -n Anna database.csv`
Busca Anna e mostra qual linha deu match.

- `-r` recursivo
- `-i` canse INsensitive
- `-v` invertido
- `-l` apenas nomes dos arquivos
- `-c` qtde em cada arquivo
- `-E` interpreta pattern como expressao regular 

## sed e awk
`sed 's/padrão_regex/novo_texto/g' caminho_do_arquivo.txt`
manipular os arquivos em texto, e podem substituir sequências de caracteres com base em padrões de expressões regulares.

`awk '/padrão_regex/ {print $1}' caminho_do_arquivo.txt`
processamento de texto. É possível aplicar padrões de expressões regulares para buscas ou manipulações.

## Powershell e cmd
[Documentação](https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_regular_expressions?view=powershell-7.5&viewFallbackFrom=powershell-7.3)

`Get-Content arquivo.txt | ForEach-Object { if ($_ -match "padrão_regex") { $_ } }`
powershell

`findstr /r "padrão_regex" arquivo.txt`
cmd

## Metacaracteres
<table>
  <thead>
    <tr>
      <th>Metacaractere</th>
      <th>Significado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.</code></td>
      <td>Qualquer caractere, exceto quebras de linha.</td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Zero ou mais ocorrências do caractere ou grupo anterior.</td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Uma ou mais ocorrências do caractere ou grupo anterior.</td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Zero ou uma ocorrência do caractere ou grupo anterior.</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Alternância, corresponde a um dos padrões à esquerda ou à direita.</td>
    </tr>
    <tr>
      <td><code>()</code></td>
      <td>Grupo de captura, agrupa caracteres para aplicar metacaracteres a eles.</td>
    </tr>
    <tr>
      <td><code>[]</code></td>
      <td>Classe de caracteres, corresponde a qualquer caractere dentro dos colchetes.</td>
    </tr>
    <tr>
      <td><code>[^]</code></td>
      <td>Classe de caracteres negada, corresponde a qualquer caractere que não esteja dentro dos colchetes.</td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>Âncora de início de linha, corresponde ao início de uma linha.</td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>Âncora de final de linha, corresponde ao final de uma linha.</td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>Escape, permite escapar metacaracteres para correspondê-los literalmente.</td>
    </tr>
    <tr>
      <td><code>{}</code></td>
      <td>Quantificador personalizado, especifica o número exato ou faixa de repetições.</td>
    </tr>
  </tbody>
</table>

## Classes de Caracteres
Exemplos com combinações de números, letras e negação de caracteres.
<table>
  <thead>
    <tr>
      <th>Regex</th>
      <th>Descrição</th>
      <th>Correspondência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[a-z]</code></td>
      <td>Qualquer letra minúscula de 'a' a 'z'</td>
      <td>"a", "m", "z"</td>
    </tr>
    <tr>
      <td><code>[0-9]</code></td>
      <td>Qualquer dígito de 0 a 9</td>
      <td>"0", "7", "9"</td>
    </tr>
    <tr>
      <td><code>[A-Za-z]</code></td>
      <td>Qualquer letra maiúscula ou minúscula</td>
      <td>"A", "b", "Z"</td>
    </tr>
    <tr>
      <td><code>[0-9A-Fa-f]</code></td>
      <td>Qualquer caractere hexadecimal</td>
      <td>"1", "A", "d"</td>
    </tr>
    <tr>
      <td><code>[^0-9]</code></td>
      <td>Qualquer caractere que não seja um dígito</td>
      <td>"a", "B", "!"</td>
    </tr>
    <tr>
      <td><code>[aeiou]</code></td>
      <td>Qualquer vogal minúscula</td>
      <td>"a", "e", "o"</td>
    </tr>
    <tr>
      <td><code>[^aeiou]</code></td>
      <td>Qualquer caractere que não seja uma vogal</td>
      <td>"b", "z", "1"</td>
    </tr>
    <tr>
      <td><code>[|?/’]</code></td>
      <td>Caracteres literais</td>
      <td>"|", "/", " ? ", “‘”</td>
    </tr>
  </tbody>
</table>

## Caracteres Especiais
<table>
  <thead>
    <tr>
      <th>Caractere</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-</td>
      <td>Hífen usado para definir intervalos de caracteres. Pode ser escapado com <code>\</code> para ser tratado como um literal.</td>
    </tr>
    <tr>
      <td>]</td>
      <td>Colchete de fechamento usado para marcar o fim de uma classe de caracteres. Pode ser escapado com <code>\</code> para ser tratado como um literal.</td>
    </tr>
    <tr>
      <td>^</td>
      <td>Circunflexo usado para negar uma classe de caracteres quando colocado no início de <code>[ ]</code>. Dentro de <code>[ ]</code>, é tratado como um literal.</td>
    </tr>
    <tr>
      <td>\</td>
      <td>Barra invertida usada para escapar caracteres especiais dentro de <code>[ ]</code> para que sejam tratados como literais.</td>
    </tr>
  </tbody>
</table>

## Shorthands
[Artigo Freecodecamp](https://www.freecodecamp.org/news/what-does-d-mean-in-regex/).
<table>
  <thead>
    <tr>
      <th>Caractere</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-</td>
      <td>Hífen usado para definir intervalos de caracteres. Pode ser escapado com <code>\</code> para ser tratado como um literal.</td>
    </tr>
    <tr>
      <td>]</td>
      <td>Colchete de fechamento usado para marcar o fim de uma classe de caracteres. Pode ser escapado com <code>\</code> para ser tratado como um literal.</td>
    </tr>
    <tr>
      <td>^</td>
      <td>Circunflexo usado para negar uma classe de caracteres quando colocado no início de <code>[ ]</code>. Dentro de <code>[ ]</code>, é tratado como um literal.</td>
    </tr>
    <tr>
      <td>\</td>
      <td>Barra invertida usada para escapar caracteres especiais dentro de <code>[ ]</code> para que sejam tratados como literais.</td>
    </tr>
  </tbody>
</table>

## Escapes
Precisar utilizar caracteres especiais como literais.
<table>
  <thead>
    <tr>
      <th>Regex</th>
      <th>Descrição</th>
      <th>Correspondência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>\[</code></td>
      <td>Colchete de abertura <code>[</code> literal</td>
      <td>"["</td>
    </tr>
    <tr>
      <td><code>\]</code></td>
      <td>Colchete de fechamento <code>]</code> literal</td>
      <td>"]"</td>
    </tr>
    <tr>
      <td><code>\.</code></td>
      <td>Ponto <code>.</code> literal</td>
      <td>"."</td>
    </tr>
    <tr>
      <td><code>\+</code></td>
      <td>Sinal de adição <code>+</code> literal</td>
      <td>"+"</td>
    </tr>
    <tr>
      <td><code>\\</code></td>
      <td>Escape <code>\</code> literal</td>
      <td>""</td>
    </tr>
  </tbody>
</table>

## Flags
- g não parar ao encontrar o primeiro match
- m o arquivo é multilinhas, então $ por exemplo não significa a última palavra do arquivo mas sim última palavra de cada linha

## Metacatacteres POSIX
Portable Operating System Interface for Unix.
[Reference](https://www.regular-expressions.info/posixbrackets.html).

```ps
root@PC-GUI:~/code-offline/regex-concepts# grep '[[:digit:]]' database.csv
Rogério Águas Bezerra Filho,rogerioaguas@email.com,(49) 92361-2598,83085126406,22/07/1995
Cleberson Kauê Assunção Sobrinho,clebinho@email.com.br,(95) 92589-4243,18440126387,19/03/1959
Francisco Chico de Dias,chico@email.com.br,(67) 92846-3472,80544915143,17/10/2004
Bóris Thiago Carrara Mendes,borio@email.com,(85) 92657-6956,48275258979,17/06/1999
Benedito Nivaldo de Cruz,beneh@email.com,(44) 92891-2952,877-691-581.68,15/12/1997
Anna Dara Brito,aninha@email.com,(64) 92967-8938,71642300721,04/03/1994
Suzana Galindo de Quintana,suzanaquintana@email.com,(28) 93481-2521,84658458594,19/11/1964
Jason Raul Burgos Leal de Azevedo,jason@email.com.br,(98) 93602-3624,826.580.743-01,13 05 1973
Julieta Correia Marin,julie@email.com,(13) 92977-7223,752.473.458-19,22111996
Berenice Sabrina Bezerra de Maldonado,berenice@email.com,(28) 3547-5161,764.682.144-67,28.03.1984
root@PC-GUI:~/code-offline/regex-concepts#
```
