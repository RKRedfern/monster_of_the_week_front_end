class UserApi{

    constructor(port){
        this.baseUrl = `${port}/users`
    }

    // getUsers(){
    //     fetch(this.baseUrl)
    //     .then(r => r.json())
    //     .then(json => {
    //         json["data"].forEach(element => {
    //             const user = new User({id: element.id, ...element.attributes})
    //             user.attachUserToDom()
    //         })
    //     })
    // }

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
                
                const user = new User({id: json.data.id, ...json.data.attributes})

                user.attachUserToDom()
                let userId = user.id
                console.log(userId)
                
                monsterApi.getUsersMonsters(userId)
            }
        )}
}

// 3/30/2021 

// login functionality - 'hold' user data to render it along side monsters
// homepage structure grid 
// logout button and toggle implemented again 
// favorite icon 

