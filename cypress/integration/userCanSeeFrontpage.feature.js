describe('User open page to see the three selections', () => {
  beforeEach(function () {
    cy.visit("/");
  })

  it('can see the Title', () => {
    cy.get('#selections').should('contain', 'Rock Paper Scissors')
      })

  it('can see the background image', () => {
    cy.get('body').should('have', 'Rock Paper Scissors')
    cy.get('body').should('have.attr', 'background-image', '/users')
      })

  it('can see three selections', () => {
    cy.get('#selections').within(() => {
        cy.get('#rock')
        cy.get('#paper')
        cy.get('#scissor')
    })
  })
});