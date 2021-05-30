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
  if (searchQuery.length < 2) {
    refs.countCard.innerHTML = '';
    refs.countCard.innerHTML = '';
    return error('Too many matches found. Please enter a more specific query!');
  }
  API.fetchCountries(searchQuery).then(countries => {
    if (!countries) {
      return errorCount();
    }

    if (countries.length >= 2 && countries.length <= 10) {
      //   console.log(countries);
      refs.countCard.innerHTML = '';
      renderList(countries);
    }
    if (countries.length === 1) {
      renderCard(countries);
    }
  });
}

function renderCard(country) {
  console.log(country);
  //   refs.countName.value = '';
  const markupCard = countryCardTpl(...country);
  refs.countCard.innerHTML = markupCard;
}
function renderList(searchQuery) {
  const markupList = countryListTpl(searchQuery);
  refs.countCard.innerHTML = markupList;
}
function errorCount() {
  refs.countCard.innerHTML = 'Not found';
}
