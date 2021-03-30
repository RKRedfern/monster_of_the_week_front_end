class MonsterApi{

    constructor(port){
        this.baseUrl = `${port}/monsters`
    }

    getMonsters(){
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(element => {
                const monster = new Monster({id: element.id, ...element.attributes})
                monster.attachMonsterToDom()
            })
        })
    }


}

