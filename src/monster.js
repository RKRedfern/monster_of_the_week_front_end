class Monster{

    static all = []
    static container = document.querySelector('#monster-card-container')

    constructor({id, name, description, image_url, rarity, fav, user_id, category_id}){
        this.id = id
        this.name = name 
        this.description = description
        this.image_url = image_url
        this.rarity = rarity 
        this.fav = fav
        this.user_id = user_id
        this.category_id = category_id

        this.element = document.createElement('card')
        this.element.dataset["id"]= id
        this.element.id = `monster-${id}`

        Monster.all.push(this)
    }

    render(){
        this.element.innerHTML = `
            <div data-id="${this.id}">
                <strong class="name">${this.name}</strong>:
                <span class="description">${this.description}</span>
                <center class="rarity">${this.rarity}</center>
                <center class="image">${this.image_url}</center>
                <button class="fav" data-id="${this.fav}">Favorite</button>
            </div>
        `
        this.element.setAttribute('class', 'card')
        return this.element
    }

    attachToDom(){
        this.render()
        console.log(this)
        Monster.container.append(this.element)
    }


}