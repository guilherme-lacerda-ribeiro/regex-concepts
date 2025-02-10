O SEO (Search Engine Optimization) desempenha um papel crucial no sucesso de qualquer site ou conteúdo online. É a prática de otimizar seu conteúdo para que ele seja classificado mais alto pelos motores de busca, como o Google. Muitos aspectos do SEO se concentram em elementos de conteúdo, como palavras-chave e a qualidade do texto. Nesse sentido, as regex podem ser grandes aliadas para aprimorar a estrutura e a eficácia do SEO. Vamos conferir algumas aplicações?

## Redirecionamento de URLs

Um aspecto relevante para o SEO é garantir que as urls sejam amigáveis, pois URLs muito longas e com vários parâmetros podem comprometer a experiência do usuário. Uma forma de melhorar esse tópico é através do uso de Regex, confira:

Imagine que você tenha URLs que contenham parâmetros de consulta, como "?categoria=noticias&id=123". Você pode usar expressões regulares para redirecionar essas URLs para versões mais amigáveis, como "/noticias/123". Confira a expressão, a seguir:

```js
^/noticias/(\d+)$
```

Essa expressão regular captura o ID da notícia e redireciona para a versão limpa do URL. Isso melhora a legibilidade das URLs e ajuda na classificação nos mecanismos de busca. Além disso, essa prática também evita duplicação de conteúdo, dentre outros processos que podem prejudicar o seu rankeamento no SEO.

## Extração de Dados de Páginas da Web

As expressões regulares podem ser usadas para extrair informações estruturadas ou não estruturadas de páginas da web, como preços de produtos, informações de contato ou dados de classificação de palavras-chave.

Um exemplo comum é a pesquisa de [SKU (Stock Keeping Unit)](https://venda.amazon.com.br/sellerblog/o-que-e-sku-do-produto-e-qual-a-importancia-de-utilizar-esse-codigo#:~:text=A%20sigla%20vem%20do%20termo,de%20modo%20r%C3%A1pido%20e%20simplificado.) de um e-commerce, que é um código que carrega informações sobre um produto. Essas informações podem ser usadas para melhorar seu próprio conteúdo e estratégia de SEO, mantendo-o competitivo no mercado.

## URL canônica

Essa técnica é fundamental para manter o conteúdo atualizado e evitar duplicação em sua página web. Mas como isso funciona?

É comum que grandes sites ou plataformas tenham vários endereços direcionando para suas páginas. No entanto, os motores de buscas podem interpretar isso como acessos à diferentes páginas. Consequentemente, o seu servidor web pode trazer resultados diferentes para cada URL, interferindo nas métricas.

Podemos, por exemplo, trabalhar com um código JavaScript e regex para a validação de uma URL canônica, ‘www.alura.com.br’, vamos conferir no código a seguir:

```js
// Expressão regular para validar uma URL canônica "www.alura.com.br"
const regexCanonica = /^https?:\/\/www\.alura\.com\.br$/;

// URLs de exemplo
const urlsDeExemplo = [
  "https://www.alura.com.br",
  "http://www.alura.com.br",
  "https://www.alura.com.br/pagina",
  "https://www.alura.com",
];

// Verificando se as URLs de exemplo correspondem à regex canônica
urlsDeExemplo.forEach((url) => {
  if (regexCanonica.test(url)) {
    console.log(`A URL '${url}' é uma URL canônica válida.`);
  } else {
    console.log(`A URL '${url}' não é uma URL canônica válida.`);
  }
});
```

A expressão regular ^https?:\/\/www\.alura\.com\.br$ é usada para validar URLs canônicas que começam com "http://" ou "https://" seguido de "www.alura.com.br". A função test() verifica se uma URL corresponde à regex canônica.

As URLs no exemplo são verificadas em relação à regex canônica usando um loop forEach, e o resultado é exibido no console.

Expressões regulares podem ser usadas para criar regras de canonicalização sofisticadas que redirecionam automaticamente as versões não preferenciais de URLs para a versão preferencial. Isso ajuda os motores de busca a indexar seu conteúdo de forma mais eficaz e evita penalizações por conteúdo duplicado.

Ainda há muitas formas de aplicar expressões regulares para otimização do SEO e você pode se aprofundar no assunto através dos conteúdos a seguir:

- [Guia de otimização de mecanismos de pesquisa (SEO) para iniciantes](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br)
- [Dicas rápidas e atualização sobre os filtros regex no Search Console](https://developers.google.com/search/blog/2021/06/regex-negative-match?hl=pt-br)
- Mais exemplos de Expressões regulares aplicadas ao SEO [REGEX: o segredo para uma análise detalhada de seu site e otimização de SEO](https://www.maudy.com.br/expressoes-regulares-regex/)
- [Formação SEO](https://cursos.alura.com.br/formacao-seo)
- [Curso de SEO: dominando estratégias e ferramentas para aumento de conversões](https://cursos.alura.com.br/course/seo-estrategias-ferramentas-aumento-conversoes?utm_source=gnarus&utm_medium=timeline)
