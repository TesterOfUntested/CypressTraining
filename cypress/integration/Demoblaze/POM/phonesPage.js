class phonesPage{

    checkHowManyPhones(numberOfPhones){
        cy.get('.hrefch').should('have.length', numberOfPhones)
    }

    goToPhonePage(phoneName){
        cy.get('.hrefch').contains(phoneName).click()
    }


}
export default new phonesPage