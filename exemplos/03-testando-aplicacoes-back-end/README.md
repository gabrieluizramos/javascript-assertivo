# Back-end API
Segundo projeto a ser testado ao longo do livro.

Esse projeto utiliza [Node](https://nodejs.org/) e [Express](https://expressjs.com/) para a criação de uma API, que consome e aplica as funcionalidades da CLI que testamos anteriormente.

## Para quem está lendo o livro
Ao clonar esse repositório enquanto acompanha o livro, não esqueça de apagar a pasta `__tests__` para que você possa realizar os exemplos acompanhando o conteúdo.

## Estrutura do Projeto
Na raíz do projeto, temos 2 pastas principais:
- `http`: onde você pode interagir com as rotas da API, utilizando o arquivo `api.http` você consegue disparar as requisições usando extensões como [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) ou, caso prefira, pode utilizar a collection do Postman através do arquivo `postman_collection.json`;
- `src`: contém o código fonte da aplicação, contendo as seguintes subpastas e arquivos:
  - `controllers`: contém o código que vai interagir, de fato, com uma requisição ao final de uma cadeia de `middlewares`, para as rotas de `auth`, `user` e `users`;
  - `middlewares`: seguem o mesmo fundamento que vimos na CLI;
  - `routes`: contém as especificações e criação das rotas da API, sendo `auth`, `users` e `users`;
  - `services`: contém alguns métodos para listagem de usuários que não foram criados na CLI anteriormente mas são interessantes para aplicação e também atua como uma camada intermediária, acessando os dados da CLI e aplicando os filtros caso seja necessário;
  - `index.js`: exporta a função principal que inicia o servidor e inicia as rotas.
