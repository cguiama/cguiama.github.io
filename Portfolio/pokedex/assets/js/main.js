const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const loadLessButton = document.getElementById("loadLessButton");

const maxRecords = 11;

const limit = 6;
let offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
	return `
		<li class="pokemon ${pokemon.type}">
			<span class="number">#${pokemon.number}</span>
			<span class="name">${pokemon.name}</span>

			<div class="detail">
				<ol class="types">
					${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
				</ol>

				<img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${
					pokemon.name
				}.png"
				alt="${pokemon.name}"/>
			</div>
		</li>
	`;
}

function loadPokemonItens(offset, limit) {
	pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
		const newHtml = pokemons.map(convertPokemonToLi).join("");
		pokemonList.innerHTML = newHtml;
	});
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
	offset += limit;
	loadPokemonItens(offset, limit);
});

loadLessButton.addEventListener("click", () => {
	offset -= limit;
	loadPokemonItens(offset, limit);
});
