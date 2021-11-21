class cartPage {

    pageTitle = "STORE"
    get totalAmount () { return $('#totalp') }
    get tableProducts () { return $('.table table-bordered table-hover table-striped')}

    checkTotalAmount(totalAmount){
        cy.get("#totalp").should('eq', totalAmount)
    }

    checkIfProductAdded(productName, productPrice){
        cy.get("td").contains(productName).should('be.visible')
        cy.get("td").contains(productPrice).should('be.viisble')
    }

}
export default new cartPage()