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
        monsterCard.setAttribute('class', 'monster-card')

        const id = document.createElement('div')
        id.setAttribute('id', 'id')
        id.innerText = this.id
        
        const name = document.createElement('div')
        name.setAttribute('id', 'name')
        name.innerText = this.name
        
        const desc = document.createElement('div')
        desc.setAttribute('id', 'desc')
        desc.innerHTML = this.description

        const mImage = document.createElement('img')
        mImage.setAttribute('id', 'img')
        mImage.setAttribute('class', 'img')
        mImage.src = this.image_url

        const rarity = document.createElement('div')
        rarity.setAttribute('id', 'rarity')
        rarity.innerText = this.rarity

        const cat = document.createElement('div')
        cat.setAttribute('id', 'cat')
        cat.innerText = this.category_name

        const favBtn = document.createElement('input')
        favBtn.setAttribute('id', 'fav-btn')
        favBtn.type = 'button'
        favBtn.id = this.id
        favBtn.checked = this.fav
        favBtn.addEventListener('click', this.favorite)

        monsterCard.append(name, id, desc, cat, rarity)
        
        
        

        Monster.container.append(monsterCard)
        
    }

    attachMonsterToDom(){
        this.render()
    }

    toggle = (e) => {
        console.log(e.target.checked)
        if (e.target.checked === true){ 
            console.log("Yes")
        } else {
            console.log("No")
        }
    }

    favorite = (e) => {
        e.preventDefault()
        const id = e.target.id
        const liked = e.target.checked
        this.toggle(e)
        monsterApi.favoritePatch(id, liked)
        
    }
}
