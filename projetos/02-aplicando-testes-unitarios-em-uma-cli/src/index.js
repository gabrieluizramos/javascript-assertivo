import applyMiddlewares from './middlewares/index.js';
import parse, { validateArgs } from './utils/args.js';
import logger from './utils/logger.js';
import { getUserByUsernameAndPassword } from './database/user/read.js';
import * as operations from './operations/index.js';

const app = async (args) => {
  const argsValidation = validateArgs(args);
  if (!argsValidation.valid) return logger.error(argsValidation.message);

  const operation = operations[args.operation];
  if (!operation) return logger.error(`Operação inválida: ${args.operation}`);

  try {
    const user = await getUserByUsernameAndPassword(args.username, args.password);
    await operation({...args, user});
  } catch (err) {
    logger.error('Ocorreu um erro ao executar a operação \n', err.message);
  }
};

export default applyMiddlewares(
  parse,
  app
);
