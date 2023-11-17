const URL = new URLSearchParams(window.location.search)
const OFFSET = parseInt(URL.get("offset") || "0") // parseInt konvertere en string til et number
const NEXT_PAGE = document.querySelector(".nextPage")
const PREV_PAGE = document.querySelector(".prevPage")


fetch(`https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}`)
	.then(function (response) {
		if (response.status !== 200)
			throw new Error("fejlbesked kig her")
		return response.json()
	})
	.then(function (data) {

		const LAST_OFFSET = data.count - (data.count % 20)
		// hvis offset er større end eller lig med det størst mulige offset vi må have, 
		// så skal vi bruge LAST_OFFSET - ellers skal vi bruge OFFSET + 20
		NEXT_PAGE.href = `/?offset=${OFFSET >= LAST_OFFSET ? LAST_OFFSET : OFFSET + 20}`
		PREV_PAGE.href = `/?offset=${OFFSET <= 0 ? 0 : OFFSET - 20}`

		const UL = document.querySelector(".pokeList")
		data.results.forEach(function (result) {
			const LI = document.createElement("li")
			LI.innerHTML = `<a class="pokeList__a" href="/pokemon.html?keyword=${result.name}">${result.name}</a>`
			UL.append(LI)	
		})
	})
	.catch(function (error) {
		window.location.href = "/ups.html"
		console.log(error)
	})