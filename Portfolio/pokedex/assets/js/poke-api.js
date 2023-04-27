const pokeApi = {};

function convertPokeApiToDetailPokemon(pokeDetail) {
	const pokemon = new Pokemon();
	pokemon.number = pokeDetail.order;
	pokemon.name = pokeDetail.name;

	const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
	const [type] = types;

	pokemon.types = types;
	pokemon.type = type;
	return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
	return fetch(pokemon.url)
		.then((response) => response.json())
		.then(convertPokeApiToDetailPokemon);
};

pokeApi.getPokemons = (offset = 0, limit = 608) => {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
	return fetch(url)
		.then((response) => response.json())
		.then((jsonBody) => jsonBody.results)
		.then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
		.then((detailRequests) => Promise.all(detailRequests))
		.then((pokemonDetails) => pokemonDetails);
};
