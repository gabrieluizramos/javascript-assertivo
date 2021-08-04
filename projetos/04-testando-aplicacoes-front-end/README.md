# Parte 4
## Testando aplicações Front-end
Terceiro projeto a ser testado ao longo do livro.

Esse projeto é uma camada de Front-end que integra com a API desenvolvida na [parte 3](../03-testando-aplicacoes-back-end)

## Para quem está lendo o livro
Ao clonar esse repositório enquanto acompanha o livro, não esqueça de apagar a pasta `__tests__` para que você possa realizar os exemplos acompanhando o conteúdo.

## Estrutura do projeto
Esse projeto foi iniciado utilizando [create-react-app](https://create-react-app.dev/) pra que o foco ficasse justamente na aplicação e nos seus testes e o mínimo de tempo possível fosse dedicado às configurações de build.

Para que pudéssemos testar a maior quantidade de cenários de aplicações possíveis, foi utilizado [React](https://pt-br.reactjs.org/) para a construção dos seus componentes, [Redux](https://redux.js.org/)/[React-Redux](https://react-redux.js.org/) para gerenciamento de estado e [Styled Components](https://styled-components.com/) como solução de estilo.

Dentro da pasta `src` encontra-se o código fonte da aplicação, divido da seguinte maneira:
- `clients`: clientes intermediários que ligam os componentes às APIs externas como:
  - `http`: para realização de requisições HTTP`;
  - `storage`: para manipulação de dados de cookie/localStorage.
- `components`: componentes mais básicos da aplicação que servem somente de interação de usuário e não manipulam nenhum estado global. Cada componente está em uma pasta separada, que contém:
  - `index.js`: arquivo do componente em si;
  - `styles.js`: arquivo com os estilos do componente;
  - `stories.js`: arquivo de configuração do storybook do componente.
- `hooks`: alguns hooks do React reutilizáveis;
- `mocks`: alguns dados para utilização nos arquivos;
- `pages`: componentes principais das páginas (`login` e `dashboard`), que montam as telas da aplicação utilizando os componentes da pasta `components` e também utilizam dados de estado definidos globalmente;
- `providers`: os provedores de informação (e Providers React) da aplicação, dividos em:
  - `notification`: provê a configuração para a utilização das notificações de sucesso/erro;
  - `redux`: provê a configuração para a utilização do Redux como gerenciamento global de estado;
  - `theme`: provê o tema da aplicação para reuso dos componentes.
- `routes`: configurações para utilização das rotas públicas e privadas;
- `store`: arquivos relacionados ao estado global da aplicação, contém as configurações principais nos arquivos `index.js`, as configurações de middlewares em `middlewares.js` e a composição dos reducers em `reducers.js`. Também possui as subpastas, cada uma com suas respectivas `actions`, `reducers` e `selectors` sendo:
  - `notification`: relacionada à notificações de sucesso/erro;
  - `profiles`: relacionada aos dados de perfis de usuários;
  - `user`: relacionada aos dados do usuário de autenticado.
- `styles`: possui os estilos globais da aplicação no arquivo `reset.js` e o tema no arquivo `theme.js`;
- `app.js`: inicia as aplicações com todos os Providers, rotas e aplica o Reset de estilos;
- `index.js`: instancia a aplicação utilizando ReactDOM.
