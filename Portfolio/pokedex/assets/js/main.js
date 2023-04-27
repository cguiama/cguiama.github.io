const offset = 0;
const limit = 0;
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
				}.png" alt="${pokemon.name}"/>
			</div>
		</li>
	`;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
	const newList = (pokemonList.innerHTML += pokemons
		.map(convertPokemonToLi)
		.join(""));
});
