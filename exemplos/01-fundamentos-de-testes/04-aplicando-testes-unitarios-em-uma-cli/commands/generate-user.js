import { createUser } from './user.js';

import logger from '../src/utils/logger.js';

const { uid, ...user } = createUser();

logger.success(`
  Usuário criado com sucesso! \n
  Basta copiar o JSON abaixo e colar no campo "data" da CLI \n
  '${JSON.stringify(user, null, 2)}'
  ------------- minificado ------------- \n
  '${JSON.stringify(user)}'
`);
