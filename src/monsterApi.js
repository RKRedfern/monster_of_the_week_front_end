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

    favoriteFetch(e){
        console.log(e.target.value)
        console.log(e.target.id)
    //     let fav = 

    //     fetch(this.baseUrl, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //         "fav": more
    //     })
    //     })
    //     .then(res => res.json())
    //     .then((like_obj => {
    //     e.target.previousElementSibling.innerText = `${more} likes`;
    // }))
    // }
    }

}
// when the favorite button is clicked on a monster card 
// send a patch request to the API that toggles the boolean value of the 'favorite' attribute 
// optimisticly render/change the icon displayed on the card on click 


