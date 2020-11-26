Cypress.Commands.add('goToApp', () => {
  cy.visit('http://localhost:8081');
});

Cypress.Commands.add('login', (role = 'USER') => {
  const admin = role.toUpperCase() === 'ADMIN';
  const user = admin ? 'admin' : 'Leola_Kautzer74';
  const password = admin ? 'admin' : '5mYFQeV4KQLx9m4';

  cy.get('input[placeholder="usuario"]').type(user);
  cy.get('input[placeholder="sua senha super secreta"]').type(password);
  cy.contains('Entrar').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('[aria-label="sair"]').click();
});
