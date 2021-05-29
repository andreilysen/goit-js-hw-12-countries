function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error: ', error);
    });
}

export default { fetchCountries };
