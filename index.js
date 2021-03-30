

const port = 'http://localhost:3000/api/v1'
const monsterApi = new MonsterApi(port)

monsterApi.getMonsters()

//Monster Render Code

// const monsterCardContainer = document.querySelector('#monster-card-container')

// function getMonsters(){
//     fetch('http://localhost:3000/api/v1/monsters')
//     .then(r => r.json())
//     .then(data => renderMonsterData(data))
// }

// function renderMonsterData(monster) {
//     monster.data.forEach(data => monsterCardBuilder(data))
// }

// function monsterCardBuilder(data) {
    
//     let h3 = document.createElement('h3')
//     h3.innerText = data.attributes.name

//     let p = document.createElement('p')
//     p.innerText = data.attributes.description
    
//     let img = document.createElement('img')
//     img.setAttribute('src', data.attributes.image_url)
//     img.setAttribute('class', 'monster-avatar')

//     let h4 = document.createElement('h4')
//     h4.innerText = data.attributes.rarity

//     let button = document.createElement('button')
//     button.innerText = data.attributes.fav

//     let divCard = document.createElement('div')
//     divCard.setAttribute('class', 'card') 
//     divCard.append(h3, img, p, h4, button)
//     monsterCardContainer.append(divCard)
// }

// getMonsters()

// //User Code

// const userCardContainer = document.querySelector('#user-card-container')

// function getUsers(){
//     fetch('http://localhost:3000/api/v1/users')
//     .then(r => r.json())
//     .then(data => renderUserData(data))
// }

// function renderUserData(user) {
//     user.data.forEach(data => userCardBuilder(data))
// }

// function userCardBuilder(data) {

//     let h3 = document.createElement('h3')
//     h3.innerText = data.attributes.name

//     let h4 = document.createElement('h4')
//     h4.innerText = data.attributes.title
    
//     let img = document.createElement('img')
//     img.setAttribute('src', data.attributes.image_url)
//     img.setAttribute('class', 'user-avatar')

//     let divCard = document.createElement('div')
//     divCard.setAttribute('class', 'card')
//     divCard.append(h3, img, h4)
//     userCardContainer.append(divCard)
// }

// getUsers()

//Post Users

// function postUser(user_data){
    
//     fetch('http://localhost:3000/api/v1/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//             name: user_data.name.value,
//             title: user_data.title.value,
//             image_url: user_data.image.value,
//         })
//     })
//     .then(r => r.json())
//     .then(new_user => console.log(new_user))
// }

//DOM toggle 

// const userSubmit = document.querySelector(".add-user-form")
// const logoutButton = document.querySelector("#logout-button")

// userSubmit.addEventListener('submit', e => {
//     console.log()
//     e.preventDefault()
//     toggleLandingView()
//     postUser(e.target)
// })

// logoutButton.addEventListener('click', e => {
//     toggleLandingView(true)
// })

// function toggleLandingView(showHomePage) {
//     document.getElementById("create-user-container").hidden = showHomePage;
//     document.getElementById("monster-card-container").hidden = showHomePage;
//     document.getElementById("user-card-container").hidden = showHomePage;
// }


