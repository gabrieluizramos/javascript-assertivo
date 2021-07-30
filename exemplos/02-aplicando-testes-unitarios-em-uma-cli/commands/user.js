import faker from 'faker';

import ROLES from '../src/constants/roles.js';

// Cria cada usuário
export const createUser = ({ role = ROLES.USER, ...concat } = {}) => ({
  email: faker.internet.email(),
  userName: faker.internet.userName(),
  password: faker.internet.password(),
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  uid: faker.datatype.uuid(),
  avatar: faker.internet.avatar(),
  role,
  ...concat,
});
