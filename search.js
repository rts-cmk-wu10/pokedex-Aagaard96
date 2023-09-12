const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


function fetchPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(function (response) {
            if (response.status === 200) {
                return response.json();
            } else {
                document.body.innerText += "Ups, noget gik galt. Prøv igen senere.";
                throw new Error("Request failed with status " + response.status);
            }
        })
        .then(function (data) {

            console.log(data);
            const divImg = document.querySelector(".pokemon");
            divImg.innerHTML = `
            <img class="dex__img" src="${data.sprites.other.dream_world.front_default}" alt="">
              <h1 class="dex__name">${data.name}</h1>`;

            const divInfo = document.querySelector(".pokeInfo");
            divInfo.innerHTML = `
            <h1>hej</h1>`

        })
        .catch(function (error) {
            console.error(error);
            // Handle the error here
        });
}

searchButton.addEventListener("click", function () {
    const pokemonName = searchInput.value.toLowerCase();
    fetchPokemonData(pokemonName);
});
