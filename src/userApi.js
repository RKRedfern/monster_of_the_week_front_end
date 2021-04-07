class UserApi{

    constructor(port){
        this.baseUrl = `${port}/users`
    }

    getUsers(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(json => {
            json['data'].forEach(element => {
                if (element.id < 5) {
                    const agentArray = new User({id: element.id, ...element.attributes})
                    agentArray.attachAgentToDom()
                } else {
                    const userArray = new User({id: element.id, ...element.attributes})
                    //userArray.attachUserToDom()
                }
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
                let userId = user.id
                console.log(userId)
                user.attachUserToDom()
                monsterApi.getUsersMonsters()
            }
        )}
}

// 3/30/2021 

// login functionality - 'hold' user data to render it along side monsters
// homepage structure grid 
// logout button and toggle implemented again 
// favorite icon 

