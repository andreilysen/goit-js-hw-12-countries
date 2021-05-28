import './sass/main.scss';
import getRefs from './js/refs.js';
import API from './js/fetchCountries.js';
import countryCardTpl from './countryCard.hbs';
import debounce from 'lodash.debounce';

const refs = getRefs();
refs.countName.addEventListener('input', debounce(searchCountry, 500));
function searchCountry(e) {
  e.preventDefault;
  const searchQuery = e.target.value;
  API.fetchCountries(searchQuery).then(renderCard);
}

function renderCard(country) {
  const markUp = countryCardTpl(...country);
  refs.countCard.innerHTML = markUp;
}
