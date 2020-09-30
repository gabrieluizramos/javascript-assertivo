import parse, { validateArgs } from './utils/args.js';
import logger from './utils/logger.js';
import { isAdmin } from './database/user/read.js';
import * as operations from './operations/index.js';

export default async function app (cliArgs) {
  const args = parse(...cliArgs);
  const argsValidation = validateArgs(args);
  if (!argsValidation.valid) {
    return logger.error(argsValidation.message);
  }

  const authorized = await isAdmin(args);
  if (authorized) {
    logger.success('Usuário autorizado com sucesso, executando operação desejada...');

    try {
      await operations[args.operation](args);
      logger.success(`Operação ${args.operation} realizada com sucesso :)`);
    } catch (err) {
      logger.error('Ocorreu um erro ao executar a operação', err);
    }

  } else {
    logger.error('Você não tem permissão para executar essa ação');
  }
};
