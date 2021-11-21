class laptopPage{
    checkAddedAlert(){
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added');
          });
    }

    checkTitle(){
        cy.title().should('eq', 'STORE')
    }

    checkLaptopName(laptopName){
        cy.contains(laptopName).should('be.visible')
    }

    clickAddToCart(){
        cy.get("a").contains("Add to cart").click()
    }
    
    addLaptopToCart(laptopName){
        this.checkTitle()
        this.checkLaptopName(laptopName)
        this.clickAddToCart()
        cy.wait(1000)
    }
}
export default new laptopPage