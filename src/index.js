import './style.scss'

const APP_key = 'cf9c157ba9f2166d9217d85bdd2a686c'
const root = document.querySelector('#root')
const input = document.querySelector('#input')
const send = document.querySelector('#send')
const breakfast = document.querySelector('#breakfast')
const lunch = document.querySelector('#lunch')
const dinner = document.querySelector('#dinner')

async function getData(){
    root.innerHTML = 'please wait'
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${input.value}&app_id=34862f68&app_key=${APP_key}&imageSize=LARGE`
    const responce = await fetch(url)
    const result = await responce.json()
    root.innerHTML = ''
    input.value = ''
    for(let i of result.hits){
        root.innerHTML += `<div class="recipe">
             <img src="${i.recipe.image}" alt="">
             <p>${i.recipe.label}</p>
             <p><span>Type: </span>${i.recipe.mealType}</p>
             <p><span>Cuisine: </span>${i.recipe.cuisineType}</p>
             <a class="recept" href="${i.recipe.url}" target="_blank">get recipe</a>
        </div>`   
    }
}

async function getBreakfast(){
    root.innerHTML = 'please wait'
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=34862f68&app_key=${APP_key}&mealType=Breakfast&imageSize=LARGE`
    const responce = await fetch(url)
    const result = await responce.json()
    root.innerHTML = ''
    input.value = ''
    console.log(result)
    for(let i of result.hits){
        root.innerHTML += `<div class="recipe">
             <img src="${i.recipe.image}" alt="">
             <p>${i.recipe.label}</p>
             <p><span>Type: </span>${i.recipe.mealType}</p>
             <p><span>Cuisine: </span>${i.recipe.cuisineType}</p>
             <a class="recept" href="${i.recipe.url}" target="_blank">get recipe</a>
        </div>`
    }
}

async function getLunch(){
    root.innerHTML = 'please wait'
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=34862f68&app_key=${APP_key}&mealType=Lunch&imageSize=LARGE`
    const responce = await fetch(url)
    const result = await responce.json()
    root.innerHTML = ''
    input.value = ''
    for(let i of result.hits){
        root.innerHTML += `<div class="recipe">
             <img src="${i.recipe.image}" alt="">
             <p>${i.recipe.label}</p>
             <p><span>Type: </span>${i.recipe.mealType}</p>
             <p><span>Cuisine: </span>${i.recipe.cuisineType}</p>
             <a class="recept" href="${i.recipe.url}" target="_blank">get recipe</a>
        </div>`
    }
}

async function getDinner(){
    root.innerHTML = 'please wait'
    const url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=34862f68&app_key=${APP_key}&mealType=Dinner&imageSize=LARGE`
    const responce = await fetch(url)
    const result = await responce.json()
    root.innerHTML = ''
    input.value = ''
    for(let i of result.hits){
        root.innerHTML += `<div class="recipe">
             <img src="${i.recipe.image}" alt="">
             <p>${i.recipe.label}</p>
             <p><span>Type: </span>${i.recipe.mealType}</p>
             <p><span>Cuisine: </span>${i.recipe.cuisineType}</p>
             <a class="recept" href="${i.recipe.url}" target="_blank">get recipe</a>
        </div>`
    }
}

send.addEventListener('click', getData)
breakfast.addEventListener('click', getBreakfast)
lunch.addEventListener('click', getLunch)
dinner.addEventListener('click', getDinner)