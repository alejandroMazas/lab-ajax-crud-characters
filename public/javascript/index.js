const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI
      .getFullList()
      .then(({ data }) => {  // ---> .then(response => console.log(response.data))
        let info = ""
        data.forEach(element => {
          console.log(element)
          info += ` <div class="character-info">
        <div class="name">${element.name}</div>
        <div class="occupation">${element.occupation}</div>
        <div class="cartoon">${element.cartoon}</div>
        <div class="weapon">${element.weapon}</div>
      </div>`
        })
        document.querySelector('.characters-container').innerHTML = info
      })
      .catch(err => console.log(err))
    // const data = response.data
    // const { data } = response   ---> estas dos líneas son lo mismo -- desestructuración

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    let inputValue = document.getElementById('idvalue').value
    console.log('VALOR DEL INPUT', inputValue)

    charactersAPI
      .getOneRegister(inputValue)
      .then(response => {
        console.log('DATAAAAAAAAAA', response)
        let info = ""
        info += `<div class="character-info">
      <div class="name">${response.data.name}</div>
      <div class="occupation">${response.data.occupation}</div>
      <div class="cartoon">${response.data.cartoon}</div>
      <div class="weapon">${response.data.weapon}</div>
    </div>`
        document.querySelector('.characters-container').innerHTML = info
      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    let inputValue = document.getElementById('idDeletevalue').value
    console.log('VALOR DEL INPUT', inputValue)

    charactersAPI
      .deleteOneRegister(inputValue)
      .then(response => {
      })
      .catch(err => console.log(err))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    e.preventDefault()


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#createInput')

    const newCharacter = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,

    }

    let info = ""
    charactersAPI
      .createOneRegister(newCharacter)
      .then(response => {
        info += `<div class="character-info">
        <div class="name">${response.name}</div>
        <div class="occupation">${response.occupation}</div>
        <div class="cartoon">${response.cartoon}</div>
        <div class="weapon">${response.weapon}</div>
      </div>`
      })
      .catch(err => console.log(err))

    document.querySelector('.characters-container').innerHTML = info
  });
});
