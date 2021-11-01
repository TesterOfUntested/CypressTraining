class loginPage{

    get usernameInput () { return $('#loginusername')}
    get passwordInput () { return $('#loginpassword')}
    get cancelButton () { return $('.btn .btn-secondary')}
    get logInButton () { return $('.btn .btn-primary')}
    
}
export default new loginPage