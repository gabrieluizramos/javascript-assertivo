# Sorteador
Essa ferramenta tem o intuito de facilitar dinâmicas de sorteio do livro.

## Como utilizar
No arquivo [`data/input.json`](./data/input.json) forneça os dados de quem estará participando no sorteio como email, nome, contato, ou qualquer informação.

Execute o comando:
```sh
npm run sortear <numero>
```

Onde `<numero>` corresponde à quantidade de pessoas que devem ser sorteadas com base no arquivo de `input` preenchido anteriormente. Caso esse parâmetro não seja indicado, somente 1 pessoa será sorteada.

Ao final de sua execução você verá no terminal as pessoas que foram selecionadas aleatoriamente pelo sorteio. Além disso, o arquivo [`data/output.json`](./data/output.json) será atualizado contendo os dados de quem ganhou.

Por fim, não esqueça de atualizar o arquivo [`HISTORY.md`](./HISTORY.md) para manter um histórico dos sorteios realizados.
