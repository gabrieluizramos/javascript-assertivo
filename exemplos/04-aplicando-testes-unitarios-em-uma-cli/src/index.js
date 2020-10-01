import applyMiddlewares from './middlewares/index.js';
import parse, { validateArgs } from './utils/args.js';
import logger from './utils/logger.js';
import { getUserByEmailAndPassword } from './database/user/read.js';
import * as operations from './operations/index.js';

const app = async (args) => {
  const argsValidation = validateArgs(args);
  if (!argsValidation.valid) logger.error(argsValidation.message);

  const user = await getUserByEmailAndPassword(args.username, args.password);
  if (!user) return logger.error('Não foi possível autenticar. Usuário inexistente ou dados incorretos.');

  const operation = operations[args.operation];
  if (!operation) return logger.error(`Operação inválida: ${args.operation}`);

  try {
    await operation({...args, user});
    logger.success(`Operação ${args.operation} realizada com sucesso :)`);
  } catch (err) {
    logger.error('Ocorreu um erro ao executar a operação \n', err.message);
  }
};

export default applyMiddlewares(
  cli => parse(...cli),
  app
);
