import logger from '@jsassertivo/cli/src/utils/logger.js';
import { generateRandomWinner } from './random.js';
import { getCandidates, writeWinners } from './candidates.js';

export default async function (amount) {
  try {
    let candidates = getCandidates();

    if (candidates.length < amount) {
      throw new Error(`Não é possível sortear, participantes (${candidates.length}) < quantidade (${amount})`)
    }

    const winners = [];
    for (let i = 0; i < amount; i++) {
      const { winner, number } = generateRandomWinner(candidates);
      winners.push(winner);

      candidates = candidates.filter((_, index) => index !== number);
    }

    logger.log('E quem ganhou foi... 🥁');
    logger.success(winners);
    await writeWinners(winners);
  } catch ({ message }) {
    logger.error('Erro ao gerar ganhadores', message);
  }
}


