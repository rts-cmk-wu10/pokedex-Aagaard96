const URL = new URLSearchParams(window.location.search)
const SPINNER = document.querySelector(".pokeball__loading")
SPINNER.style.display = "block"

console.log(URL)

fetch(`https://pokeapi.co/api/v2/pokemon/${URL.get("keyword")}`)
	.then(function (response) {
		if (response.status === 200) {
			return response.json();
		} else {
			window.location.href = "indsæt"
			document.body.innerText += "Ups, noget gik galt. Prøv igen senere.";
			throw new Error("Request failed with status " + response.status);
		}
	})
	.then(function (data) {
		SPINNER.style.display = "none"
		console.log(data);
		const divImg = document.querySelector(".pokemon");
		divImg.innerHTML = `
		<img class="dex__img" src="${data.sprites.other.dream_world.front_default}" alt="">
              <h1 class="dex__name">${data.name}</h1>`;
		const divInfo = document.querySelector(".pokeInfo");
		divInfo.innerHTML = `
		<table>
  <tr>
    <th>HEIGHT:</th>
    <td>${data.height} feet</td>
  </tr>
  ${data.stats.map(stat => `
	<tr>
	  <th class="dex__statName">${stat.stat.name}:</th>  
	  <td>${stat.base_stat}</td>
	</tr>
  `).join('')}
</table>`;

	})
	.catch(function (error) {
		console.error(error);
		// Handle the error here
	});





