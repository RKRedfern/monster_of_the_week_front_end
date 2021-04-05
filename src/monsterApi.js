class MonsterApi{

    constructor(port){
        this.baseUrl = `${port}/monsters`
    }

    // getMonsters(){
    //     fetch(this.baseUrl)
    //     .then(r => r.json())
    //     .then(json => {
    //         // sort here
    //         json["data"].forEach(element => {
    //             const monster = new Monster({id: element.id, ...element.attributes})
    //             monster.attachMonsterToDom()
    //         })
    //     })
    // }

    favoritePatch(id, liked){

        fetch(`http://localhost:3000/api/v1/monsters/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(liked)
        })
        .then(res => res.json())

    }

    getUsersMonsters(userId){
        fetch(`http://localhost:3000/api/v1/users/${userId}/monsters`)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(element => {
                const monster = new Monster({id: element.id, ...element.attributes})
                monster.attachMonsterToDom()
            })
        })
    }

}

// optimisticly render/change the icon displayed on the card on click 
// route to all users monsters 

