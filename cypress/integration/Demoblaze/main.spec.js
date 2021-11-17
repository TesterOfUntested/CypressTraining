import logInPage from "./POM/logInPage";
import mainPage from "./POM/mainPage";
import signUpPage from "./POM/signUpPage";
import upperMenu from "./POM/upperMenu";
import phonesPage from "./POM/phonesPage";
import generator from "./utils/generator";
import phonePage from "./POM/phonePage";

describe('User authentication tests', () => {
  
  var username = generator.generateUsername()
  var phoneName = 'Samsung galaxy s6'

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

      it('Phones cart test', () =>{
        mainPage.goToPhones()
        phonesPage.checkHowManyPhones(7)
        phonesPage.goToPhonePage(phoneName)
        phonePage.addPhoneToCart(phoneName)
      })

    after(() => {
      upperMenu.goToHome()
      if(upperMenu.checkIfLogged())
        upperMenu.goToLogOut()
    })

})