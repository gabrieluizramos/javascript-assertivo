import { createUser } from '@jsassertivo/cli/commands/user';

beforeEach(() => {
  cy.goToApp();
  cy.login('admin');
});

it('Cadastra um usuário', () => {
  cy.get('[aria-label="cadastrar"]').click();

  const profile = createUser();

  cy.get('[placeholder="email"]').type(profile.email);
  cy.get('[placeholder="usuario"]').type(profile.userName);
  cy.get('[placeholder="sua senha super secreta"]').type(profile.password);
  cy.get('[placeholder="nome"]').type(profile.name);
  cy.get('[placeholder="sobrenome"]').type(profile.lastName);
  cy.get('[placeholder="role"]').select(profile.role)

  cy.contains('Confirmar').click();
});

it('Edita um usuário', () => {
  const button = cy.get('[aria-label="editar"]').last();
  button.scrollIntoView();
  button.should('be.visible');
  button.click();

  const newProfile = createUser();

  cy.get('[placeholder="email"]').clear().type(newProfile.email);
  cy.get('[placeholder="sua senha super secreta"]').clear().type(newProfile.password);

  cy.contains('Confirmar').click();
});

it('Deleta um usuário', () => {
  const button = cy.get('[aria-label="deletar"]').last();
  button.scrollIntoView();
  button.should('be.visible');
  button.click();
});
