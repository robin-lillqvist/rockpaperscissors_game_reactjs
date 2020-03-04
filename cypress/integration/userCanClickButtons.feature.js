describe('User open page to see the three selections', () => {
    beforeEach(function () {
      cy.visit("/");
    })
    
    it('can click the buttons and see results', () => {
      cy.get('#rock').click()
      cy.get('.player').within(() => {
      cy.get('.playerChoice').should('contain', 'Rock')
      })
      cy.get('#results').contains('You choose')
  
      cy.get('#paper').click()
      cy.get('.player').within(() => {
      cy.get('.playerChoice').should('contain', 'Paper')
      })
      cy.get('#results').contains('You choose')
  
      cy.get('#scissors').click()
      cy.get('.player').within(() => {
      cy.get('.playerChoice').should('contain', 'Scissors')
      })
      cy.get('#results').contains('You choose')
    })
  });