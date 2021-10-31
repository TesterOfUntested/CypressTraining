import mainPage from "./POM/mainPage";

describe('User authentication tests', () => {
    beforeEach(() => {
        cy.visit('www.demoblaze.com/');
        cy.title().should('eq', mainPage.pageTitle)
      })

      it('Test sign up', () => {
        
      })

})