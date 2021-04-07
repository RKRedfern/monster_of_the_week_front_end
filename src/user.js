class User{

    static all = []
    static container = document.querySelector('#user-card-container')

    constructor({id, name, title, image_url}){
        this.id = id
        this.name = name 
        this.title = title
        this.image_url = image_url

        this.element = document.createElement('card')
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
        img.setAttribute('id', 'user-img')
        img.setAttribute('class', 'img')
        img.src = this.image_url

        userCard.append(id, img, name)
    }
    

    attachUserToDom(){
        this.render()
        User.container.append(this.element)
    }

    //function to filter seed agents from user created ones



}