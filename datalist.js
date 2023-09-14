const DATALIST = document.getElementById("pokemonList");
const SEARCH_FIELD = document.querySelector(".pokemon__search")

SEARCH_FIELD.addEventListener("focus", getDatalist)
SEARCH_FIELD.addEventListener("focusout", function (event) {
    SEARCH_FIELD.removeEventListener("focus", getDatalist)
})

function getDatalist(event) {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        // status tjek (status kode 200 eller noget andet.)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.results.forEach(function (pokemon) {
                DATALIST.innerHTML += `<option>${pokemon.name}</option>`;
            });
        });
}