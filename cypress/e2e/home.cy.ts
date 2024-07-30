describe('Home page', () => {
  it('it gets rendered and shows welcome message', () => {
    cy.visit('/')
    cy.contains('Hello! Welcome to Rate It!')
  })
})