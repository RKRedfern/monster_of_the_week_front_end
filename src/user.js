class User{

    static all = []
    static container = document.querySelector('#user-card-container')

    constructor({id, name, title, image_url}){
        this.id = id
        this.name = name 
        this.title = title
        this.image_url = image_url
 
        this.element = document.createElement('card')
        this.element.setAttribute('class', 'card')
        this.element.dataset["id"]= id
        this.element.id = `user-${id}`

        User.all.push(this)
    }

    render(){
        this.element.innerHTML = `
            <div data-id="${this.id}">
                <strong class="name">${this.name}</strong>:
                <span class="description">${this.title}</span>
                <center class="image">${this.image_url}</center>
            </div>
        `
        return this.element
    }

    attachUserToDom(){
        this.render()
        console.log(this)
        User.container.append(this.element)
    }


}