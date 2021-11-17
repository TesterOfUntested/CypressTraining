class upperMenu{

    goToHome(){
        cy.get('.nav-link').contains('Home').click()
    }

    goToContact(){
        cy.get('.nav-link').contains('Contact').click()
    }
    
    goToAboutUs(){
        cy.get('.nav-link').contains('About us').click()
    }

    goToCart(){
        cy.get('.nav-link').contains('Cart').click()
    }

    goToLogIn(){
        cy.get('.nav-link').contains('Log in').click()
    }

    goToSignUp(){
        cy.get('.nav-link').contains('Sign up').click()
    }

    goToLogOut(){
        cy.get('.nav-link').contains('Log out').click()
    }

    checkIfLogged(){
        cy.get('.nav-link').contains('Log out').then($text => {
            if ($text.is(':visible')){
              return false
            }
            return true
          })
    }

}
export default new upperMenu