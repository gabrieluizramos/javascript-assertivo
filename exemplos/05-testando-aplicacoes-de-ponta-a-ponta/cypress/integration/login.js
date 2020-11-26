describe('Realiza o login', () => {
  it('Como admin', () => {
    cy.goToApp();
    cy.login('admin');

    cy.url().should('include', '/dashboard');
    cy.logout();
  });

  it('Como usuário', () => {
    cy.goToApp();
    cy.login();

    cy.url().should('include', '/dashboard');
    cy.logout();
  });
});
