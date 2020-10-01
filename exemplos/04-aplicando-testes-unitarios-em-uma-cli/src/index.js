import parse, { validateArgs } from './utils/args.js';
import logger from './utils/logger.js';
import { getUserByEmailAndPassword } from './database/user/read.js';
import * as operations from './operations/index.js';

export default async function app (cliArgs) {
  const args = parse(...cliArgs);
  const argsValidation = validateArgs(args);
  if (!argsValidation.valid) {
    return logger.error(argsValidation.message);
  }

  const user = await getUserByEmailAndPassword(args.username, args.password);

  if (user) {
    try {
      await operations[args.operation]({...args, user});
      logger.success(`Operação ${args.operation} realizada com sucesso :)`);
    } catch (err) {
      logger.error('Ocorreu um erro ao executar a operação \n', err.message);
    }

  } else {
    logger.error('Usuário inexistente ou dados incorretos.');
  }
};
