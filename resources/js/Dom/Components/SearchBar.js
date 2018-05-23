import { Component } from 'domr-c';
import fireSearchEvent from './fire-search-event';
import SearchResult from './SearchResult';
import runningTime from '../utils/running-time';
import { saveCityData, getCityDataAll } from '../utils/db-manipulation';

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
  constructor(api, storage, citiesCookie, db) {
    super();
    this.api = api;
    this.storage = storage;
    this.cities_cookie = citiesCookie;
    this.db = db;
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
                const name = thisSearchResult.querySelector('.search__result__name').getAttribute('data-value');
                const country = thisSearchResult.querySelector('.search__result__country').textContent;
                const countryName = thisSearchResult.querySelector('.search__result__country-name').textContent;
                const timezone = thisSearchResult.querySelector('.search__result__timezone').textContent;

                saveDataToLocal(cityId, this.storage, this.cities_cookie);

                saveCityData(cityId, name, country, countryName, timezone)
                .then((dbresult) => {
                  console.log(dbresult);
                  getCityDataAll()
                  .then((data) => {
                    data.forEach((d) => {
                      console.log(d.name);
                    });
                  });
                  location.href = '#/';
                });
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

