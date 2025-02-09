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
