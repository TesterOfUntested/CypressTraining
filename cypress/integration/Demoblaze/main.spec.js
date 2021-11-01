import logInPage from "./POM/logInPage";
import mainPage from "./POM/mainPage";
import signUpPage from "./POM/signUpPage";
import upperMenu from "./POM/upperMenu";
import generator from "./utils/generator";

describe('User authentication tests', () => {
  
  var username = generator.generateUsername()
  alert(username)

    before(() => {
        cy.visit('www.demoblaze.com/');
        cy.title().should('eq', mainPage.pageTitle)
        
      })

      it('Test sign up', () => {
        upperMenu.goToSignUp()
        signUpPage.signUp(username, 'password')
      })

      it('Test log in', () => {
        upperMenu.goToLogIn()
        logInPage.logIn(username, 'password')
      })

})