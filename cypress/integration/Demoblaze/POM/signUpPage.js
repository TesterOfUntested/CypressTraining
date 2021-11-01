class signUpPage{

    signUp(username, password){
        cy.get('#sign-username').invoke('val', username)
        cy.get("[type='password']").first().invoke('val', password)
        cy.get('.btn').contains('Sign up').click()
    }
}
export default new signUpPage