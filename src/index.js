const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

function handleToy(toy){
  let collection = document.querySelector('#toy-collection')
  let div = document.createElement('div')
  div.className = 'card'
  div.dataset.id = toy.id
  
  let img = document.createElement('img')
  img.className = 'toy-avatar'
  img.src = toy.image


  let h2 = document.createElement('h2')
  h2.innerText = toy.name

  let p = document.createElement('p')
  p.innerText = toy.likes

  let btn = document.createElement('button')
  btn.className = 'like-btn'
  btn.innerText = 'Like!'
  btn.addEventListener('click', handleLike)

  div.appendChild(h2)
  div.appendChild(img)
  div.appendChild(p)
  div.appendChild(btn)
  collection.appendChild(div)
  
  }

addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    toyForm.addEventListener('submit', handleForm)
  } else {
    toyForm.style.display = 'none'
  }
})






// OR HERE!

fetchToys()
