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

}
export default new upperMenu