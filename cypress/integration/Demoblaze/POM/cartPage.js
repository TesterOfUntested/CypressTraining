class cartPage {

    checkTotalAmount(totalAmount){
        cy.get("h3").contains(totalAmount).should('be.visible')
    }

    checkIfProductAdded(productName, productPrice){
        cy.get("td").contains(productName).should('be.visible')
        cy.get("td").contains(productPrice).should('be.visible')
    }

}
export default new cartPage()