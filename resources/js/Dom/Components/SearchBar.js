import { Component } from 'domr-c';
import fireSearchEvent from './fire-search-event';
import SearchResult from './SearchResult';
import runningTime from '../utils/running-time';

function saveDataToLocal(cityId, storage, citiesCookie) {
  if (storage.getItem(citiesCookie)) {
    let tempStore = JSON.parse(storage.getItem(citiesCookie));

    if (tempStore.includes(cityId)) {
      tempStore = tempStore.filter(item => item !== cityId);
    }

    tempStore.push(cityId);

    storage.setItem(citiesCookie, JSON.stringify(tempStore));
  } else {
    storage.setItem(citiesCookie, JSON.stringify([cityId]));
  }
}

export default class extends Component {
  constructor(api, storage, citiesCookie) {
    super();
    this.api = api;
    this.storage = storage;
    this.cities_cookie = citiesCookie;
  }

  Markup() {
    return `
      <input type="text" class="search__bar" placeholder="Mumbai, New York"/>
    `;
  }

  Events() {
    let timeout = null;

    this.Keyup((self) => {
      const searchArea = self.parentElement.querySelector('.search__area');
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const val = self.value.trim().toLowerCase();
        if (val) {
          fireSearchEvent(this.api, val)
          .then((result) => {
            const thisResult = result;

            searchArea.innerHTML = '';
            thisResult.forEach((param) => {
              const searchResult = SearchResult(param, val);

              searchArea.innerHTML += searchResult;
            });

            searchArea.querySelectorAll('li').forEach((itm) => {
              const searchResult = itm.querySelector('.search__result');

              searchResult.addEventListener('click', (e) => {
                e.preventDefault();
                const thisSearchResult = searchResult;
                const cityId = thisSearchResult.getAttribute('data-id');

                saveDataToLocal(cityId, this.storage, this.cities_cookie);

                location.href = '#/';
              });

              runningTime(itm.querySelector('.search__result__time'), 'HH:mm:ss');
            });
          });
        } else {
          searchArea.innerHTML = '';
        }
      }, 300);
    });
  }
}

