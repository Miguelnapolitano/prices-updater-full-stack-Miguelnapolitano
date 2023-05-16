<!DOCTYPE html>
<html>
<head>
  <title>Prices Updater - README</title>
</head>
<body>
  <h1>Prices Updater</h1>
    <br>
    <br>
  <h3>Link para o LinkedIn do Desenvolvedor</h3>
  <a href="https://www.linkedin.com/in/miguel-felipe-napolitano-70407776/">Miguel Felipe Napolitano</a>

  <br>
  <br>

  <h2>Descrição</h2>
  <p>Prices Updater é uma aplicação web Full-Stack desenvolvida para atualizar preços de produtos através do upload de arquivos CSV.</p>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>Front-end: React</li>
    <li>Back-end: Node.js com Express</li>
    <li>Banco de Dados: MySQL</li>
    <li>Estilização: CSS com Styled Components</li>
  </ul>

  <h2>Como Rodar (Instalação de Dependências)</h2>
  <p>Para rodar a aplicação, siga os passos abaixo:</p>

  <h3>Front-end</h3>
  <ol>
    <li>Acesse a pasta do front-end: <code>cd front-end/prices_updater</code></li>
    <li>Instale as dependências: <code>npm install</code></li>
    <li>Rode a aplicação: <code>npm start</code></li>
    <li>Acesse a aplicação no seu navegador através do endereço: <code>http://localhost:3000</code></li>
  </ol>

  <h3>Back-end</h3>
  <ol>
    <li>Acesse a pasta do back-end: <code>cd back-end</code></li>
    <li>Instale as dependências: <code>npm install</code></li>
    <li>Configura as variáveis de ambiente seguindo o env.example</li>
    <li>Rode a aplicação: <code>npm start</code></li>
    <li>O servidor estará rodando na porta 5000</li>
  </ol>


  <h3>Observações:</h3>
  <p> Certifique-se de ter o Node.js e o MySQL instalados em seu ambiente de desenvolvimento.</p>
  <p> Há um arquivo chamado "database.txt" que contém o script SQL para criar e popular as tabelas direto no seu banco de dados.</p>
  <p> Há um arquivo chamado "atualizacao_preco_exemplo.csv" que é um modelo de formato para a planilha que será enviada na aplicação.</p>
  <p></p>

  <h2>Documentação das Rotas</h2>

  <h3>Validar Preços - POST http://localhost:5000/validate</h3>
  <p>Esta rota é usada para validar os preços dos produtos antes de efetuar a atualização.</p>

  <h4>Parâmetros</h4>
  <ul>
    <li><strong>csvFile</strong> (obrigatório): Arquivo CSV contendo os dados dos produtos a serem validados.</li>
  </ul>

  <h4>Resposta</h4>
  <p>A resposta desta rota é um objeto JSON contendo a seguinte estrutura:</p>

  <pre>
  {
    [
      {
        "product_code": 16,
        "name": "AZEITE  PORTUGUÊS  EXTRA VIRGEM GALLO 500ML",
        "current_price": 22.54,
        "new_Price": 22.54,
        "broken_rule": "It's only possible to adjust by R$ 2.25 above or below the current price."
      },
      {
        "product_code": 19,
        "name": "ENERGÉTICO  RED BULL ENERGY DRINK 250ML",
        "current_price": 9,
        "new_Price": 9,
        "broken_rule": "It's only possible to adjust by R$ 0.9 above or below the current price."
      },
      {
        "product_code": 26,
        "name": "ROLO DE PAPEL ALUMÍNIO WYDA 30CMX7,5M",
        "current_price": 6.5,
        "new_Price": 6.5,
        "broken_rule": "It's only possible to adjust by R$ 0.65 above or below the current price."
      },
      {
        "product_code": 18,
        "name": "BEBIDA ENERGÉTICA VIBE 2L",
        "current_price": 12,
        "new_Price": 12,
        "broken_rule": "It's only possible to adjust by R$ 1.2 above or below the current price."
      }
    ]
  }
  </pre>

  <h3>Atualizar Preços - PATCH http://localhost:5000/update</h3>
  <p>Esta rota é usada para atualizar os preços dos produtos após serem validados.</p>

  <h4>Parâmetros</h4>
  <ul>
    <li><strong>product_code</strong> (obrigatório): Código do produto a ser atualizado.</li>
    <li><strong>new_price</strong> (obrigatório): Novo preço a ser definido para o produto.</li>
  </ul>

  <h4>Resposta</h4>
  <p>A resposta desta rota é um status 200 em caso de sucesso.</p>
</body>
</html>
