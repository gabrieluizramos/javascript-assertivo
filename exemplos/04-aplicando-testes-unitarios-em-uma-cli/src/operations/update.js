import logger from '../utils/logger.js';
import { validateArgs } from '../utils/args.js';
import { toJSON } from '../database/parser.js';

import { updateUserByUid } from '../database/user/update.js';

export default async function update ({ data }) {
  const payload = toJSON(data);
  const validation = validateArgs(payload, ['uid']);

  if (!validation.valid) {
    return logger.error(validation.message);
  }

  try {
    await updateUserByUid(payload);
    logger.success('Dados do usuário atualizados com sucesso');
  } catch (err) {
    logger.error('Ocorreu um erro ao atualizar dados do usuário', err);
  }
}
