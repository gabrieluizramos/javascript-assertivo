# CLI
Essa CLI foi desenvolvida com o objetivo de elucidar os exemplos de testes do Livro. Ela possui as operações de criação e remoção de usuário, simulando um banco de dados em um arquivo em memória (`database.json`).

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

Por exemplo, para realizar a criação de um usuário, basta informar os dados de autenticação, a operação e, no campo "data", informar a `string` JSON do usuário a ser cadastrado:
```sh
jsassertivo --username=admin --password=admin --operation=create --data=string-json-do-usuario
```
### Read
Para verificar os dados de um usuário, basta informar seu `uid` no campo data:
```sh
jsassertivo --username=admin --password=admin --operation=read --data={uid}
```

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
Para remover um usuário, basta executar o mesmo comando mas com a operação `remove` e informar o `uid` do usuário no campo `data`:
```sh
jsassertivo --username=admin --password=admin --operation=create --data={uid}
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
