describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('www.demoblaze.com/');
      })

      it('displays two todo items by default', () => {
        cy.title().should('eq', 'STORE');
      })

})