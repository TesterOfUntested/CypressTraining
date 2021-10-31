import mainPage from "./POM/mainPage";
import upperMenu from "./POM/upperMenu";

describe('User authentication tests', () => {
    beforeEach(() => {
        cy.visit('www.demoblaze.com/');
        cy.title().should('eq', mainPage.pageTitle)
      })

      it('Test sign up', () => {
        upperMenu.goToHome()
        //cy.get('#login2').click()
      })

})