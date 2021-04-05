class User{

    //static all = []
    static container = document.querySelector('#user-card-container')

    constructor({id, name, title, image_url}){
        this.id = id
        this.name = name 
        this.title = title
        this.image_url = image_url

        this.element = document.createElement('card')
        //this.element.setAttribute('class', 'card')
        this.element.dataset["id"]= id
        this.element.id = `user-${id}`

        //User.all.push(this)
    }

    render(){
        const userCard = this.element
        userCard.className = "user-card"
        userCard.setAttribute('class', 'card')

        const id = document.createElement('h3')
        id.innerText = this.id
        
        const name = document.createElement('h3')
        name.innerText = this.name
        
        const title = document.createElement('p')
        title.innerText = this.title

        const img = document.createElement('img')
        img.setAttribute('class', 'user-avatar')
        img.src = this.image_url

        userCard.append(id, name, title, img)
    }
    

    attachUserToDom(){
        console.log(this)
        this.render()
        User.container.append(this.element)
        //This line will change to pop the user onto their landing page
    }

    


}