import { isAdmin } from '../constants/roles.js';

// Valida se usuário é admin para realizar alguma ação que necessita de permissão
export const isAdminMiddleware = (data) => {
  if (!isAdmin(data.user)) {
    throw new Error('Você não possui permissão para executar essa operação.');
  }

  return data;
};
