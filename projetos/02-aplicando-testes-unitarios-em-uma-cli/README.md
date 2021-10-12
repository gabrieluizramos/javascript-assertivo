# Parte 2
## Aplicando testes unitários em uma CLI

Essa CLI foi desenvolvida com o objetivo de elucidar os exemplos de testes do Livro. A aplicação, basicamente, permite cadastro, remoção, atualização e leitura de usuários.

## Para quem está lendo o livro
Ao clonar esse repositório enquanto acompanha o livro, não esqueça de apagar a pasta `__tests__` e o arquivo `jest.config.js` para que você possa realizar os exemplos acompanhando o conteúdo.

## Estrutura do projeto
Alguns comandos utilitários (como de criação da base de dados e gerar usuário) estão disponíveis na pasta [commands](./commands), contendo seus respectivos arquivos.

Na raiz do projeto existe um arquivo `cli.js` que é, basicamente o arquivo que inicia a aplicação através da CLI e importa a função principal e fornece os argumentos informado em sua execução. Também a raíz está localizado o arquivo `database.json` que será utilizado para simularmos um banco de dados contendo os dados da aplicação.

A pasta `src` contém todo o código da aplicação. Embora não ocorra nenhum processo de transpilação/build, achei interessante manter essa estrutura por ser um padrão adotado no mercado. Essa pasta, por sua vez, contém a seguinte estrutura:
- `index.js`: contém a função principal que inicia a aplicação;
- `constants`: diretório que contém as constantes utilizadas ao longo do projeto que são, basicamente, as `roles.js` (diferentes níveis de usuário);
- `database`: contém a "camada" que realiza a manipulação do arquivo `database.json`, sendo:
  - `file.js`: faz a leitura/escrita do arquivo `database.json` propriamente dito;
  - `parser.js`: faz a formatação de dados para JSON/String e vice-versa;
  - `user`: diretório contendo as operações de `CRUD` de usuário (`create.js`, `read.js`, `remove.js`, `update.js`).
- `middlewares`: arquivos que funcionam como middlewares das operações, sendo:
  - `index.js`: que aplica a lógica da cadeia de middlewares;
  - `user.js`: middleware para validações de usuário (como validação de permissão);
  - `data.js`: middleware para validação do campo `data` em cada operação.
- `operations`: diretório que contém o manuseio das operações de `CRUD`, onde serão executadas através da CLI e retornarão mensagens ao usuário (camada intermediária entre a CLI e as operações do diretório `database`), por isso contém uma estrutura de arquivos bem semelhante à da pasta `database`;
- `utils`: diretório que contém alguns utilitários necessários para a aplicação, como o de logging (`logger.js`) e o que formata/valida os argumentos enviados via terminal (`args.js`).


## Instalação
Para utilizar, basta instalar o projeto com:
```sh
npm i
```

Realizar o link do projeto para que a CLI possa ser executável:
```sh
npm link
```

Após isso, será possível executar o comando, faça o teste:
```sh
jsassertivo
```

E você verá a seguinte mensagem:
```sh
🚨 Você precisa fornecer os argumentos corretos para a CLI
```

## Utilização
Para utilizar essa CLI, é necessário informar 4 argumentos:
- username: nome de usuário admin para ser "autenticado" e realizar alguma operação;
- password: senha de um usuário admin para para realizar a operação;
- operation: operação a ser realizada (`read`/`create`/`delete`/`update`);
- data: dados necessários para realizar tal operação.

A CLI é um CRUD simples de usuário, mas aplicando algumas validações por permissão. A ideia é que todos os usuários sejam capazes de verificar informações de qualquer usuário existente na base. Entretanto, somente usuários com permissões de administrador podem fazer qualquer modificação (como criar, deletar ou atualizar) qualquer registro.

Por isso, cada cadastro é composto das seguintes campos:
- `email`: contendo o email do usuário;
- `userName`: contendo um nome de usuário;
- `password`: contendo a senha;
- `name`: contendo o nome inicial;
- `lastName`: contendo o sobrenome;
- `uid`: campo contendo um identificador único para cada usuário;
- `avatar`: (opcional) contendo uma URL de foto do usuário;
- `role`: contém o tipo de permissão dou usuário no sistema (podendo ser `USER` ou `ADMIN`).

Dessa forma, um registro de usuário é formado da seguinte maneira:
```json
{
  "email": "Taryn38@yahoo.com",
  "userName": "Maybelle28",
  "password": "k0Ohk1xTBnz8TPC",
  "name": "Amy",
  "lastName": "Cruickshank",
  "uid": "91d1f470-83e3-44a3-a211-3ad7a8f5b853",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/8d3k/128.jpg",
  "role": "USER"
}
```

Por exemplo, para realizar a criação de um usuário, basta informar os dados de autenticação, a operação e, no campo "data", informar a `string` JSON do usuário a ser cadastrado:
```sh
jsassertivo --username=admin --password=admin --operation=create --data=string-json-do-usuario
```
### Read
Para verificar os dados de um usuário, basta informar seu `uid` no campo data.

Por exemplo, um usuário com o seguinte UID:
```json
{
  "uid": "3511baa5-2939-43f1-bb2c-70b80702770d",
}
```

Para ler seus dados, basta executar:
```sh
jsassertivo --username=admin --password=admin --operation=read --data='{"uid": "3511baa5-2939-43f1-bb2c-70b80702770d"}'
```

**Observação**

Caso você utilize **Windows PowerShell**, pode ser que ocorra um erro ao fornecer os dados como `JSON` fazendo com que a função `JSON.parse` dentro do arquivo `src/database/parser.js` não funcione como esperado. Isso é uma particularidade do PowerShell que pode ser facilmente contornada.

Caso você tenha esse problema, será necessário escapar as aspas duplas do `JSON` fornecido no campo `data` usando uma barra (`\`) antes de cada uma das aspas duplas (`"`).

Ao invés de fornecer o campo assim:
```
--data='{"uid": "3511baa5-2939-43f1-bb2c-70b80702770d"}'
```

Para que funcione corretamente, pode ser que você precise fornecer assim:
```
--data='{\"uid\": \"3511baa5-2939-43f1-bb2c-70b80702770d\"}'
```

E isso deverá ser repetido para as demais operações.

### Create
Por exemplo, pensando em um usuário com a seguinte estrutura:
```json
{
  "email": "Davion.Murray@hotmail.com",
  "userName": "Lenna71",
  "password": "D7Karr5SaC4bMw_",
  "name": "Athena",
  "lastName": "Stark",
  "role": "USER"
}
```

Basta executar a CLI da seguinte forma:
```sh
jsassertivo --username=admin --password=admin --operation=create --data='
{"email": "Davion.Murray@hotmail.com", "userName": "Lenna71", "password": "D7Karr5SaC4bMw_", "name": "Athena", "lastName": "Stark", "role": "USER"}'
```

Caso a `role` não seja informada, o padrão será `USER`.

### Remove
Para remover um usuário, basta executar o mesmo comando mas com a operação `remove` e informar o `uid` do usuário no campo `data`.

Por exemplo, um usuário com o seguinte UID:
```json
{
  "uid": "3511baa5-2939-43f1-bb2c-70b80702770d",
}
```

Para atualizar qualquer campo como, por exemplo, sua `role`, bastaria informar o seguinte JSON:

```sh
jsassertivo --username=admin --password=admin --operation=create --data='{"uid":"3511baa5-2939-43f1-bb2c-70b80702770d", "role": "ADMIN"}'
```

Para facilitar os testes locais, um existe um usuário com username/password `admin` criado, para que você possa executar os exemplos.

Caso tente realizar a operação de criação/remoção de usuário com algum usuário que não é do tipo `ADMIN`, a operação não será efetuada.

### Update
Para atualizar um usuário, no campo data, basta informar seu `uid` e os campos que deseja atualizar. Por exemplo, um usuário com a seguinte estrutra:
```json
{
  "email": "Taryn38@yahoo.com",
  "userName": "Maybelle28",
  "password": "k0Ohk1xTBnz8TPC",
  "name": "Aubree",
  "lastName": "Cruickshank",
  "uid": "91d1f470-83e3-44a3-a211-3ad7a8f5b853",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/8d3k/128.jpg",
  "role": "USER"
}
```

Para ter algum campo alterado, como, por exemplo `name`, basta informar os campo como valor, e também seu `uid`:
```json
{
  "uid": "91d1f470-83e3-44a3-a211-3ad7a8f5b853",
  "name": "NovoNome"
}
```
Executando a CLI da seguinte maneira:
```sh
jsassertivo --username=admin --password=admin --operation=create --data='{"uid": "91d1f470-83e3-44a3-a211-3ad7a8f5b853","name": "NovoNome"}'
```

## Utilitários

### Gerar nova base de dados
Você consegue consultar todos os usuários existentes no arquivo `database.json`. Caso queira redefinir a base de dados, basta rodar o comando:
```sh
npm run db:create
```

Que uma nova base será gerada no mesmo arquivo.

### Gerar dados de um novo usuário
Você consegue gerar os dados de um novo usuário através do comando:
```sh
npm run user:generate
```

Após isso, só copiar o JSON gerado e informar no campo `data`.
