class MonsterApi{

    constructor(port){
        this.baseUrl = `${port}/monsters`
    }

    getMonsters(){
        fetch('http://localhost:3000/api/v1/monsters/show')
        .then(r => r.json())
        .then(json => {
            json.data.forEach(element => {
                const monster = new Monster({id: element.id, ...element.attributes})
                monster.attachMonsterToDom()
            })
        })
    }

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

    getUsersMonsters(id){
        fetch(`http://localhost:3000/api/v1/users/${id}/monsters`)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(element => {
                const monster = new Monster({id: element.id, ...element.attributes})
                monster.attachMonsterToDom()
            })
        })
    }

}
