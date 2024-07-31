describe('Movies pages', () => {
  it('should load the popular movies page and display correspondent message', () => {
    cy.visit('/movies/popular');
    cy.contains('Popular Movies');

    cy.get('.media-list').should('have.length.greaterThan', 0);
  });

  it('should load the top rated movies page and display correspondent message', () => {
    cy.visit('/movies/top-rated');
    cy.contains('Top Rated Movies');

    cy.get('.media-list').should('have.length.greaterThan', 0);
  });

  it('should load the upcoming movies page and display correspondent message', () => {
    cy.visit('/movies/upcoming');
    cy.contains('Upcoming Movies');

    cy.get('.media-list').should('have.length.greaterThan', 0);
  });
});
