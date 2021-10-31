class cartPage {

    pageTitle = "STORE"
    get totalAmount () { return $('#totalp') }
    get tableProducts () { return $('.table .table-bordered .table-hover .table-striped')}

}
export default new cartPage()