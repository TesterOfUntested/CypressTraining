import logInPage from "./POM/logInPage";
import mainPage from "./POM/mainPage";
import signUpPage from "./POM/signUpPage";
import upperMenu from "./POM/upperMenu";
import phonesPage from "./POM/phonesPage";
import generator from "./utils/generator";
import phonePage from "./POM/phonePage";
import laptopsPage from "./POM/laptopsPage";
import laptopPage from "./POM/laptopPage";
import cartPage from "./POM/cartPage"

describe('User authentication tests', () => {
  
  var username = generator.generateUsername();
  var phoneName = 'Samsung galaxy s6';
  var phonePrice = 360;
  var laptopName = 'Sony vaio i7';
  var laptopPrice = 790;

      beforeEach(() => {
        cy.visit('www.demoblaze.com/');
      });

      it('Main Page not logged tests', () => {
        mainPage.notLoggedChecker();
      });

      it('Test sign up', () => {
        upperMenu.goToSignUp();
        signUpPage.signUp(username, 'password');
      });

      it('Test log in', () => {
        upperMenu.goToLogIn();
        logInPage.logIn(username, 'password');
      });

      it('Main Page logged tests', () => {
        mainPage.loggedChecker();
      });

      it('Phones cart test', () => {
        mainPage.goToPhones();
        phonesPage.checkHowManyPhones(7);
        phonesPage.goToPhonePage(phoneName);
        phonePage.addPhoneToCart(phoneName)
      });

      it('Laptop cart test', () => {
        mainPage.goToLaptops();
        laptopsPage.checkHowManyLaptops(6);
        laptopsPage.goToLaptopPage(laptopName);
        laptopPage.addLaptopToCart(laptopName);
      });

      it('Cart insertion test', () => {
          upperMenu.goToCart();
          cartPage.checkTotalAmount(phonePrice + laptopPrice);
          cartPage.checkIfProductAdded(laptopName, laptopPrice);
          cartPage.checkIfProductAdded(phoneName, phonePrice);
      })

})