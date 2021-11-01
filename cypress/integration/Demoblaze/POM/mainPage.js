class mainPage {

    pageTitle = "STORE"
    get listCategories () { return $('.list-group-item') }
    get navBar () { return $('#nava') }
    
}

export default new mainPage()