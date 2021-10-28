describe('User authentication tests', () => {
    beforeEach(() => {
        cy.visit('www.demoblaze.com/');
      })

      it('Test sign up', () => {
        cy.title().should('eq', 'STORE');
      })

})