# Executado no Google Colab

import requests
import re

url = "https://monicahillman.github.io/monibank/"
response = requests.get(url)
html_content = response.text

pattern = r'<(h[1-2])[^>]*>(.*?)<\/(h[1-2])>'

headings = re.findall(pattern, html_content, re.DOTALL)
for heading in headings:
  print(heading)

# ('h1', 'Moni<span class="cabecalho__logo-final">Bank</span>', 'h1')
# ('h2', 'Serviços', 'h2')
# ('h2', 'Mais vantagens do nosso banco:', 'h2')
# ('h2', 'O MoniBank', 'h2')
# ('h2', 'Serviços', 'h2')
# ('h2', 'Contato', 'h2')
# ('h2', 'Acesse nossas redes', 'h2')
# ('h2', '<span class="rodape__logo--negrito">Moni</span>Bank', 'h2')
