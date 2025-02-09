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
      <td>ncora de início de linha, corresponde ao início de uma linha.</td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>ncora de final de linha, corresponde ao final de uma linha.</td>
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
