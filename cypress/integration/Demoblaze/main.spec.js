import logInPage from "./POM/logInPage";
import mainPage from "./POM/mainPage";
import signUpPage from "./POM/signUpPage";
import upperMenu from "./POM/upperMenu";
import generator from "./utils/generator";

describe('User authentication tests', () => {
  
  var username = generator.generateUsername()

    before(() => {
        cy.visit('www.demoblaze.com/');
      })

      it('Main Page not logged tests', () => {
        mainPage.notLoggedChecker()
      })

      it('Test sign up', () => {
        upperMenu.goToSignUp()
        signUpPage.signUp(username, 'password')
      })

      it('Test log in', () => {
        upperMenu.goToLogIn()
        logInPage.logIn(username, 'password')
      })

      it('Main Page logged tests', () => {
        mainPage.loggedChecker()
      })

    after(() => {
      upperMenu.goToLogOut()
    })

})