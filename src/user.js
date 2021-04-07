class User{

    static all = []
    static userContainer = document.querySelector('#user-card-container')
    static agentContainer = document.querySelector("#select-agent-container")

    constructor({id, name, title, image_url}){
        this.id = id
        this.name = name 
        this.title = title
        this.image_url = image_url

        this.element = document.createElement('card')
        //this.element.setAttribute('class', 'card')
        this.element.dataset["id"]= id
        this.element.id = `user-${id}`

        User.all.push(this)
    }

    render(){
        const userCard = this.element
        userCard.className = "user-card"
        userCard.setAttribute('class', 'user-card')

        const id = document.createElement('div')
        id.setAttribute('id', 'user-id')
        id.innerText = this.id
        
        const name = document.createElement('div')
        name.setAttribute('id', 'user-name')
        name.innerText = this.name
        
        const title = document.createElement('div')
        title.setAttribute('id', 'title')
        title.innerText = this.title

        const img = document.createElement('img')
        img.setAttribute('id', 'user-avatar')
        img.setAttribute('class', 'img')
        img.src = this.image_url

        userCard.append(id, img, name)
    }

    attachUserToDom(){
        this.render()
        User.userContainer.append(this.element)
    }

    
    attachAgentToDom(){
        this.render()
        this.element.addEventListener('click', this.handleAgentSelect)
        User.agentContainer.append(this.element)
    }

    handleAgentSelect(){
        let userId = this.dataset.id
        monsterApi.getUsersMonsters(userId)
        toggleLandingView()
        User.userContainer.append(this)
    }

}