//API variables

const port = 'http://localhost:3000/api/v1'
const monsterApi = new MonsterApi(port)
const userApi = new UserApi(port)

// DOM Selectors

const form = document.querySelector(".add-user-form")
const nameInput = document.getElementById('new-user-name')
const titleInput = document.getElementById('user-title')
const imageInput = document.getElementById('user-image')
const logoutButton = document.querySelector("#logout-button")
const showHomePage = true;

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    userApi.createUser()
    e.target.reset()
    toggleLandingView()
}

userApi.getUsers()

//DOM toggle functions

logoutButton.addEventListener('click', e => {
    e.preventDefault()
    toggleLandingView(true)
    document.getElementById("user-card-container").innerHTML = ""
    document.getElementById("monster-folder").innerHTML = ""
})

function toggleLandingView(showHomePage) {
    document.getElementById("create-user-container").hidden = !showHomePage;
    document.getElementById("monster-card-container").hidden = showHomePage;
    document.getElementById("user-card-container").hidden = showHomePage;
    document.getElementById("user-header").hidden = showHomePage;
    document.getElementById("user-footer").hidden = !showHomePage;
}

let darkModeButton = document.getElementById('dark-mode-button')
darkModeButton.addEventListener("click", toggleView);

function toggleView(e) {
    let backgroundBody = document.body
    backgroundBody.classList.toggle("dark-mode");
}