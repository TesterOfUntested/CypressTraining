class contactPage{

    sendMessage(email, name, message){
        cy.get("#recipient-email").clear().type(email)
        cy.get("#recipient-name").clear().type(name)
        cy.get("#message-text").clear().type(message)
        cy.get("btn").contains("Send message").click()
    }

}
export default new contactPage