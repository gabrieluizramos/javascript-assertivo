import { saveDatabase } from '../src/database/file.js';
import { createUser } from './user.js';
import logger from '../src/utils/logger.js';
import ROLES from '../src/constants/roles.js';

// Quantidade de cada tipo de usuário
const ADMIN_USER_COUNT = 3;
const DEFAULT_USER_COUNT = 10;

// Cria admin padrão para facilitar nos testes locais
const MOCK_ADMIN = createUser({
  name: 'Ad',
  lastName: 'Min',
  userName: 'admin',
  password: 'admin',
  email: 'iamthe@admin.com',
  role: ROLES.ADMIN
});

// Salva JSON com usuários
const saveGenerated = async (users) => {
  try {
    const saved = await saveDatabase(users);
    logger.success('Base de usuários criada com sucesso!');
  } catch (err) {
    logger.success('Ocorreu um erro ao criar a base de usuários', err);
  }
};

// Cria usuários em lote
const createUserDatabase = (admin, user) => {
  // outras formas de fazer isso: https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
  const adminUsers = Array(admin).fill().map(() => createUser({ role: ROLES.ADMIN }));
  const defaultUsers = Array(user).fill().map(() => createUser({ role: ROLES.USER }));
  const users = [
    MOCK_ADMIN,
    ...adminUsers,
    ...defaultUsers,
  ];

  return users;
};

// Cria usuários e salva JSON
((admin, user) => {
  const users = createUserDatabase(admin, user);
  return saveGenerated(users);
})(ADMIN_USER_COUNT, DEFAULT_USER_COUNT)
