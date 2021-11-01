class loginPage{

    get usernameInput () { return $('#loginusername')}
    get passwordInput () { return $('#loginpassword')}
    get cancelButton () { return $('.btn .btn-secondary')}
    get logInButton () { return $('.btn .btn-primary')}

    logIn(username, password){
        cy.get('#loginusername').clear().invoke('val', username)
        cy.get('#loginpassword').clear().invoke('val', password)
        cy.get('.btn').contains("Log in").click()
    }

}
export default new loginPage