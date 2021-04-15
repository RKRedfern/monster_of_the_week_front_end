class UserApi{

    constructor(port){
        this.baseUrl = `${port}/users`
    }

    getUsers(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(json => {
            json['data'].forEach(element => {
                if (element.id <= 3) {
                    const agentArray = new User({id: element.id, ...element.attributes})
                    agentArray.attachAgentToDom()
                } else {
                    const userArray = new User({id: element.id, ...element.attributes})
                    //userArray.attachUserToDom()
                }
                //this function separates agents from new users - userArray can be used if there is ever a 'see all users' option.
            })
        })
    }

    createUser(){
        const userInfo = {
            user: {
                name: nameInput.value,
                title: titleInput.value,
                image_url: imageInput.value
            }
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(userInfo)
        }

        fetch(this.baseUrl, configObj)
        .then(r => r.json())
        .then(json => {
                const newUser = new User({id: json.data.id, ...json.data.attributes})
                let userId = newUser.id
                newUser.attachUserToDom()
                monsterApi.getUsersMonsters(userId)
            }
        )}
}
