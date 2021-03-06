describe('User open page to see the three selections', () => {
  beforeEach(function () {
    cy.visit("/");
  })

  it('can see the Title', () => {
    cy.get('h1').should('contain', 'Rock, Paper, Scissors!')
    cy.get('h2').should('contain', 'Choose wisely')
      })

  it('can see three selections', () => {
    cy.get('.button-container').within(() => {
        cy.get('#rock')
        cy.get('#paper')
        cy.get('#scissors')
    })
  })
});