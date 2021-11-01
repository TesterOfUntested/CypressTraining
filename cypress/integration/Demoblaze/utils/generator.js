class utils{

    generateUsername(){
        var base_username = "TesterOfUntested"
        var sufix_username = Date.now()
        return base_username+sufix_username
    }

}
export default new utils