function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response =>
    response.json(),
  );
}

export default { fetchCountries };

// const BASE_URL = 'https://pokeapi.co/api/v2';

// function fetchPokemon(pokemonId) {
//   return fetch(`${BASE_URL}/pokemon/2`).then(response => response.json());
// }

// export default { fetchPokemon };
