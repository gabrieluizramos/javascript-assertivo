# Histórico de sorteios
Contém o histórico dos sorteios realizados, com uma breve descrição sobre os eventos em que ocorreram, suas datas e nome de quem ganhou.

![gif Gatsby com taça de champagne](./images/congrats.gif)

## Como funciona?
Se você chegou até aqui, muito provavelmente você já está participando de algum dos sorteios. Agora é só torcer! 🤞

Seguindo os detalhes no post de lançamento do livro ("[Por trás das páginas: JavaScript Assertivo](https://gabrieluizramos.com.br/por-tras-das-paginas-do-javascript-assertivo)"), as regras são bem simples.

Após a realização de cada sorteio, o histórico de quem ganhou ficará registrado aqui. Teremos 3 possíveis "estados" representando um momento do **ciclo de vida do sorteio**, cada um com seus respectivos ícones, sendo eles:
| Ícone | Estado       |   Descrição   |
|:-----:|--------------|---------------|
| ⏳    | Tentativa    | Aguardando resposta                            |
| 🏆    | Sucesso      | Sorteio realizado e cupom entregue com sucesso |
| 🚫    | Falha        | E-mail de contato não respondido               |

### Ciclo de vida do sorteio
Ao realizar o sorteio o estado inicial será de **tentativa** ⏳, enviarei um email pra pessoa que foi sorteada e aguardaremos uma resposta pra garantir que o e-mail é válido e que a pessoa está ciente do sorteio e deseja receber o prêmio.

Caso a resposta seja dentro do prazo estabelecido (24h) a pessoa irá receber o cupom e poderá trocar por sua cópia do livro, resultando em **sucesso** 🏆 e tudo encerra por aqui.

Caso o e-mail não seja respondido a pessoa perde sua vez resultando em **falha** 🚫 e todo o ciclo do sorteio se inicia novamente.

Esse ciclo deve se repetir até que o cupom seja entregue pra uma pessoa que responda o email dentro do prazo estabelecido (24h) e que queira receber o prêmio.

## Resultados

### Tech Week (IFSP - Cubatão)
#### 05/10/2021
##### 🏆 Gilmar

---

### Lançamento do livro (Laboratória SAP-004)
#### 08/10/2021
##### 🏆 Karina

---

### Lançamento do livro (Laboratória SAP-005)
#### 08/10/2021
##### 🏆 Juliane

---

### Lançamento do livro (Laboratória SAP-006)
#### 08/10/2021
##### 🏆 Tauana

---

### Lançamento do livro (geral)
#### 14/10/2021
##### 🚫 <del>Ailton</del>
##### 🚫 <del>Fernando</del>
##### 🏆 Rafael

---

### Pesquisa (Laboratória SAP-007)
#### 06/05/2022
##### 🏆 Leticia

---

### Inauguração do TestCamp (Laboratória SAP-008)
#### 08/08/2022
##### 🏆 Sara
