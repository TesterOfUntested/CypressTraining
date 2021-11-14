class generator{

    generateUsername(){
        var base_username = "TesterOfUntested1"
        var sufix_username = Date.now()
        return base_username+sufix_username
    }

}
export default new generator