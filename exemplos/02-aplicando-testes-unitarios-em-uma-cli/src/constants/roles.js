// Permissões
const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

// Valida se usuário é admin
export const isAdmin = ({ role }) => role === ROLES.ADMIN;

export default ROLES;
