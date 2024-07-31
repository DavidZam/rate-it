describe('TV series pages', () => {
  it('should load the popular TV series page and display correspondent message', () => {
    cy.visit('/tv/popular');
    cy.contains('Popular TV Series');

    cy.get('.media-list').should('have.length.greaterThan', 0);
  });

  it('should load the top rated TV series page and display correspondent message', () => {
    cy.visit('/tv/top-rated');
    cy.contains('Top Rated TV Series');

    cy.get('.media-list').should('have.length.greaterThan', 0);
  });

  it('should load the airing today TV Series page and display correspondent message', () => {
    cy.visit('/tv/airing-today');
    cy.contains('Airing Today TV Series');

    cy.get('.media-list').should('have.length.greaterThan', 0);
  });
});
