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
        monsterCard.setAttribute('class', 'card')

        const id = document.createElement('h3')
        id.innerText = this.id
        
        const name = document.createElement('h3')
        name.innerText = this.name
        
        const desc = document.createElement('p')
        desc.innerHTML = this.description

        const img = document.createElement('img')
        img.innerText = this.img_url

        const rarity = document.createElement('h3')
        rarity.innerText = this.rarity

        const cat = document.createElement('h4')
        cat.innerText = this.category_name

        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.id = this.id
        checkBox.checked = this.fav

        monsterCard.append(id, name, desc, img, rarity, cat, checkBox)

        Monster.container.append(monsterCard)
        monsterCard.addEventListener('change', this.favorite)
    }

    attachMonsterToDom(){
        this.render()
    }

    toggle = () => {
        if (this.fav === true){ 
            console.log("Yes")
        } else {
            console.log("No")
        }
    }

    favorite = (e) => {
        e.preventDefault()
        const id = e.target.id
        const liked = e.target.checked
        this.toggle()
        //monsterApi.favoritePatch(id, liked)
        
    }
}
