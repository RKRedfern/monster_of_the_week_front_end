class User{

    static all = []
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

        User.all.push(this)
    }

    render(){
        this.element.innerHTML = 
        `
            <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <class="image" img-src>${this.image_url}</class=>
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.title}</p>
            </div>
            </div>
        `
        return this.element
    }
    

    attachUserToDom(){
        // console.log(this)
        this.render()
        User.container.append(this.element)
    }


}