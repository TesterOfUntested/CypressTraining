class signUpPage{

    signUp(username, password){
        cy.get('#sign-username').clear().type(username)
        cy.get("[type='password']").first().type(password)
        cy.get('.btn').contains('Sign up').click()
    }
}
export default new signUpPage