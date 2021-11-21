class laptopsPage{

    checkHowManyLaptops(numberOfLaptops){
        cy.get('.hrefch').should('have.length', numberOfLaptops)
    }

    goToLaptopPage(laptopName){
        cy.get('.hrefch').contains(laptopName).click()
    }

}
export default new laptopsPage