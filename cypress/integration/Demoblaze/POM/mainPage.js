class mainPage {
    

    navItemsCheck(userType){
        if(userType === undefined)
            userType = "notLogged"
        
        cy.get(".nav-item").contains("Home").should("be.visible")
        cy.get(".nav-item").contains("Contact").should("be.visible")
        cy.get(".nav-item").contains("About us").should("be.visible")
        cy.get(".nav-item").contains("Cart").should("be.visible")
        cy.get(".nav-item").contains("Log in").should("be.visible")
        cy.get(".nav-item").contains("Sign up").should("be.visible")

        if(userType == "logged"){
            cy.get(".nav-item").should("contain", "Log out")
            cy.get(".nav-item").should("contain", "Welcome")
        }
    }

    listGroupCheck(){
        cy.get(".list-group-item").contains("CATEGORIES").should("be.visible")
        cy.get(".list-group-item").contains("Phones").should("be.visible")
        cy.get(".list-group-item").contains("Laptops").should("be.visible")
        cy.get(".list-group-item").contains("Monitors").should("be.visible")
    }

    notLoggedChecker(){
        cy.title().should('eq', 'STORE')
        this.navItemsCheck()
        this.listGroupCheck()
        cy.get(".col-lg-9").should("be.visible")
    }

    loggedChecker(){
        cy.title().should('eq', 'STORE')
        this.navItemsCheck("logged")
        this.listGroupCheck()
        cy.get(".col-lg-9").should("be.visible")
    }

    goToPhones(){
        cy.get("a").contains("Phones").click()
    }

    goToLaptops(){
        cy.get("a").contains("Laptops").click()
    }



}

export default new mainPage