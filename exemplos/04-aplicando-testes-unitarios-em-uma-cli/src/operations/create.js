import logger from '../utils/logger.js';

import { validateArgs } from '../utils/args.js';
import { createUser } from '../database/user/create.js';
import { toJSON } from '../database/parser.js';

export default async function create ({ data }) {
  const payload = toJSON(data);
  const validation = validateArgs(payload, ['email', 'password', 'userName', 'name', 'lastName']);

  if (!validation.valid) {
    return logger.error(validation.message);
  }

  try {
    const user = await createUser(payload);
    logger.log(`
      Usuário criado com sucesso, os dados são: \n
      ----------------------------------------- \n
      '${JSON.stringify(user, null, 2)}'
    `)
  } catch (err) {
    logger.error('Ocorreu um erro ao criar usuário', err);
  }
}
