import logger from '@jsassertivo/cli/src/utils/logger.js';
import { toString } from '@jsassertivo/cli/src/database/parser.js';
import { generateRandomWinner } from './random.js';
import { getCandidates, writeWinners } from './candidates.js';

import { messages, errors, during } from './messages.js';

export default async function (amount) {
  console.clear();

  try {
    logger.log(messages.start);
    await during(1);
    let candidates = getCandidates();

    logger.log(messages.validating);
    await during(1);
    if (candidates.length < amount) {
      throw new Error(errors.validation(candidates.length, amount));
    }

    logger.log(messages.generating);
    const winners = [];
    for (let i = 0; i < amount; i++) {
      const { winner, number } = generateRandomWinner(candidates);
      winners.push(winner);

      candidates = candidates.filter((_, index) => index !== number);
    }
    await during();


    logger.log(messages.letTheDrumsRoll);
    await during();
    let drums = 2;
    while(drums--) {
      await during();
      logger.log(messages.drum);
    }
    await during();

    logger.log(messages.winners);
    await during(5);

    logger.log(messages.divider);
    logger.log(toString(winners));
    logger.log(messages.divider);

    await writeWinners(winners);

    logger.log(messages.congrats);
  } catch ({ message }) {
    logger.error('Erro ao gerar ganhadores', message);
  }
}
