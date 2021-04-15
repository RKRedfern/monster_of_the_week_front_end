class Monster{

    static all = []
    static container = document.querySelector('#monster-folder')
    
    constructor({id, name, description, image_url, rarity, fav, user_id, category_id, category_name}){
        this.id = id
        this.name = name 
        this.description = description
        this.image_url = image_url
        this.rarity = rarity
        this.category_name = category_name
        this.fav = fav
        this.user_id = user_id
        this.category_id = category_id
        this.element = document.createElement('card')
        
        Monster.all.push(this)
    }

    render(){

        const monsterCard = this.element
        monsterCard.className = "monster-card"
        monsterCard.id = this.id

        const id = document.createElement('div')
        id.setAttribute('id', 'id')
        id.innerText = `id : ${this.id}`
        
        const name = document.createElement('div')
        name.setAttribute('id', 'name')
        name.innerText = this.name
        
        const desc = document.createElement('div')
        desc.setAttribute('id', 'desc')
        desc.innerText = this.description

        const img = document.createElement('img')
        img.setAttribute('id', 'img')
        img.setAttribute('class', 'img')
        img.src = this.image_url

        const rarity = document.createElement('div')
        rarity.setAttribute('id', 'rarity')
        rarity.innerText = `rarity : ${this.rarity}`

        const cat = document.createElement('div')
        cat.setAttribute('id', 'cat')
        cat.innerText = this.category_name

        const button = document.createElement('input')
        button.className = "fav-button"
        button.setAttribute('id', 'fav-button')
        button.type = 'button'
        button.id = this.id
        button.clicked = this.fav
        button.addEventListener('click', this.favorite)

        monsterCard.append(button, id, name, img, desc, cat, rarity)

        Monster.container.append(this.element)
    }

    attachMonsterToDom = () => {
        this.render()
    }

    favorite = (e) => {
        e.preventDefault()
        const id = e.target.id
        const liked = e.target.clicked
        monsterApi.favoritePatch(id, liked)
        this.changeButton(e)
    }

    // someday call a function to change the appearance of the button/checkbox
    // is this possible to just do with CSS?

    changeButton(e) {
        const favBtn = e.target
        favBtn.classList.toggle("favorite")
    }

}
