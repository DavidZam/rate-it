describe('Home page', () => {
  it('it gets rendered and shows welcome message', () => {
    cy.visit('/home');
    cy.contains('Hello! Welcome to Rate It!');
  });
});
