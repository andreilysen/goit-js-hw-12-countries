import './sass/main.scss';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import getRefs from './js/refs.js';
import API from './js/fetchCountries.js';
import countryCardTpl from './tamplate/countryCard.hbs';
import countryListTpl from './tamplate/countryList.hbs';
import debounce from 'lodash.debounce';

const refs = getRefs();
refs.countName.addEventListener('input', debounce(searchCountry, 500));
// Function
function searchCountry(e) {
  e.preventDefault();
  const searchQuery = e.target.value.trim();
  if (searchQuery.length === 0) {
    return (refs.countCard.innerHTML = '');
  }
  if (searchQuery.length === 1) {
    refs.countCard.innerHTML = '';
    return error('Too many matches found. Please enter a more specific query!');
  }
  if (searchQuery.length === 2) {
    return API.fetchCountries(searchQuery).then(renderList);
  }

  API.fetchCountries(searchQuery).then(renderCard);
}

function renderCard(country) {
  refs.countName.value = '';
  const markupCard = countryCardTpl(...country);
  refs.countCard.innerHTML = markupCard;
}
function renderList(searchQuery) {
  const markupList = countryListTpl(searchQuery);
  refs.countCard.innerHTML = markupList;
}
