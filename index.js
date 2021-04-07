

const port = 'http://localhost:3000/api/v1'
const monsterApi = new MonsterApi(port)
const userApi = new UserApi(port)


const form = document.querySelector(".add-user-form")
const nameInput = document.getElementById('user-name')
const titleInput = document.getElementById('user-title')
const imageInput = document.getElementById('user-image')
const logoutButton = document.querySelector("#logout-button")
//const allMonstersButton = document.querySelector("#all-monsters-button")
const showHomePage = true;

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    userApi.createUser()
    e.target.reset()
    toggleLandingView()
}


userApi.getUsers()
// monsterApi.getUsersMonsters()
monsterApi.getMonsters()




//DOM toggle 

// allMonstersButton.addEventListener('click', e =>{
//     e.preventDefault()
//     monsterApi.getMonsters()
// })

logoutButton.addEventListener('click', e => {
    e.preventDefault()
    toggleLandingView(true)
    let monsterContainer = document.getElementById("monster-card-container") 
    let userContainer = document.getElementById("user-card-container") 
})

function toggleLandingView(showHomePage) {
    document.getElementById("create-user-container").hidden = !showHomePage;
    document.getElementById("monster-card-container").hidden = showHomePage;
    document.getElementById("user-card-container").hidden = showHomePage;
}


