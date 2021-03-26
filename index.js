const monsterCardContainer = document.querySelector('#monster-card-container')

function getMonsters(){
    fetch('http://localhost:3000/api/v1/monsters')
    .then(r => r.json())
    .then(data => renderMonsterData(data))
}

function renderMonsterData(monster) {
    monster.data.forEach(data => monsterCardBuilder(data))
}

function monsterCardBuilder(data) {
    const monsterCardContainer = document.querySelector('#monster-card-container')

    let h3 = document.createElement('h3')
    h3.innerText = data.attributes.name

    let p = document.createElement('p')
    p.innerText = data.attributes.description
    
    let img = document.createElement('img')
    img.setAttribute('src', data.attributes.image)
    img.setAttribute('class', 'monster-avatar')

    let h4 = document.createElement('h4')
    h4.innerText = data.attributes.rarity

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h3, img, p, h4)
    monsterCardContainer.append(divCard)
}

getMonsters()