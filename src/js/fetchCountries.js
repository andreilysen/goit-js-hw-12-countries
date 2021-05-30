function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching data');
    },
  );
}

export default { fetchCountries };
