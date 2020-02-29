describe('User open page to see the three selections', () => {

    it('can see three selections', () => {
      cy.visit("/");
      cy.get('#selections').within(() => {
          cy.get('#rock')
          cy.get('#paper')
          cy.get('#scissor')
        })
      })
  });