import { isAdmin } from '../constants/roles.js';

// Valida se usuário é admin para realizar alguma ação que necessita de permissão
export const isAdminMiddleware = (data) => {
  if (!isAdmin(data.user)) {
    throw new Error('Você não pode executar essa ação pois não é admin');
  }

  return data;
};
