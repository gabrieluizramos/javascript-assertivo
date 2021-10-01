export const messages = {
  start: '🎲 - Iniciando sorteio',
  validating: '👤 - Validando quantidade de participantes',
  generating: '📖 - Gerando aleatoriamente',
  letTheDrumsRoll: '🥁 - Que rufem os tambores',
  drum: '🥁',
  winners: '🎁 - E quem ganhou foi...',
  congrats: '🍾 - Parabéns!!!!',
  divider: '-'.repeat(100)
};

export const errors = {
  validation: (candidates, amount) => `Não é possível sortear, participantes (${candidates}) < quantidade (${amount})`,
  catcher: 'Erro ao gerar ganhadores'
}

const MILISSECONDS = 1000;
const toSeconds = seconds => seconds * MILISSECONDS;
export const during = (value = 1) => {
  const seconds = toSeconds(value);

  return new Promise(resolve => setTimeout(resolve, seconds));
}
