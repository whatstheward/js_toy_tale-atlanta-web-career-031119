const TOYS_URL = `http://localhost:3000/toys`

function fetchToys(){
    fetch(TOYS_URL)
    .then(res => res.json())
    .then(toys => toys.forEach(toy => handleToy(toy)))
  }

  function handleForm(e){
    e.preventDefault()
    let form = e.target 
    
    let newToy = {
      name: form.name.value,
      image: form.image.value,
      likes: 0,
    }
    
    handleToy(newToy)
    
    fetch(TOYS_URL, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    
    form.reset()
    }
    
    function handleLike(e){
      let toy = e.target.parentElement
      toyId = toy.dataset.id
      let likes = parseInt(toy.querySelector('p').innerHTML) + 1
      toy.querySelector('p').innerHTML = likes
      console.log(likes)
      fetch(`http://localhost:3000/toys/${toyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
                 },
        body:JSON.stringify({
          'likes': likes
             })
          })
    }