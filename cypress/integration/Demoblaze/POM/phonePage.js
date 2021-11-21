class phonePage{

    checkAddedAlert(){
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added');
          });
    }

    checkTitle(){
        cy.title().should('eq', 'STORE')
    }

    checkPhoneName(phoneName){
        cy.contains(phoneName).should('be.visible')
    }

    clickAddToCart(){
        cy.get("a").contains("Add to cart").click()
    }
    
    addPhoneToCart(phoneName){
        this.checkTitle()
        this.checkPhoneName(phoneName)
        this.clickAddToCart()
        cy.wait(1000)
    }

}
export default new phonePage