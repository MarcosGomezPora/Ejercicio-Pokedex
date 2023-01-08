let pokedex = [];
function getOl() {
  pokedex = document.getElementById("#pokedex");
}
getOl()

let pokemons = [];
function fetching () {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    pokemonData(myJson.results)
    console.log(myJson);
  });
}
fetching();


function pokemonData(pokemons) {
  for (const pokemon of pokemons) {
    fetch(`${pokemon.url}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
    let id$$ = document.createElement('p')
      id$$.textContent = myJson.id
      id$$.className = 'card-subtitle'
    let image$$ = document.createElement('img')
      image$$.src = myJson.sprites.other.home.front_default
    let divImage$$ =document.createElement('div')
      divImage$$.appendChild(image$$)
      divImage$$.className = 'card-image'
    let name$$ = document.createElement('h2')
      name$$.textContent = myJson.name
      name$$.className = 'card-title'
    let arrayTypes = [];
    for (let i = 0; i < myJson.types.length; i++) {
      arrayTypes.push(myJson.types[i].type.name)
    };
    let type$$ = document.createElement('p')
      type$$.textContent = arrayTypes
      type$$.className = 'card-subtitle'
    
    let card$$ = document.createElement('li')
      card$$.className = 'card'
      card$$.appendChild(id$$)
      card$$.appendChild(divImage$$)
      card$$.appendChild(name$$)
      card$$.appendChild(type$$)
    
    const pokedex$$ = document.querySelector("#pokedex")
      pokedex$$.appendChild(card$$)
    });
    
  }
};
pokemonData(pokemons)

