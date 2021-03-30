class UserApi{

    constructor(port){
        this.baseUrl = `${port}/users`
    }

    getUsers(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(element => {
                const user = new User({id: element.id, ...element.attributes})
                user.attachUserToDom()
            })
        })
    }
}