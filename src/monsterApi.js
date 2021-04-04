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
        .then(data => console.log(data))
        
    }

}
// when the favorite button is clicked on a monster card 
// send a patch request to the API that toggles the boolean value of the 'favorite' attribute 
// optimisticly render/change the icon displayed on the card on click 
