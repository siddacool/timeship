import { Component } from 'domr-c';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import SearchResult from './SearchResult';

function fireSearchEvent(api, searchTerm, callback) {
  goodOlAjax(api)
  .then((result) => {
    const arr = result;
    const arrSorted = arr.sort((a, b) => a.name.localeCompare(b.name));
    const cityArr = arrSorted.filter(e => e.city_id);
    const countryArr = arrSorted.filter(e => e.country_id);
    const val = searchTerm;
    const finalArr = [];

    cityArr.forEach((city) => {
      const thisCity = city;
      if (thisCity.name.startsWith(val)) {
        finalArr.push(thisCity);
      } else if (thisCity.alias && thisCity.alias.length) {
        const alias = thisCity.alias;
        for (let i = 0; i < alias.length; i++) {
          if (alias[i].trim().startsWith(val)) {
            thisCity.header = alias[i];
            finalArr.push(thisCity);
          }
        }
      }
    });

    countryArr.forEach((country) => {
      const thisCountry = country;
      if (thisCountry.name.startsWith(val)) {
        cityArr.forEach((city) => {
          const thisCity = city;
          if (thisCountry.code === thisCity.country) {
            const duplicates = finalArr.find(obj => obj.city_id === thisCity.city_id);
            if (!duplicates) {
              thisCity.header = thisCountry.name;
              finalArr.push(thisCity);
            }
          }
        });
      } else if (thisCountry.alias && thisCountry.alias.length) {
        const alias = thisCountry.alias;
        for (let i = 0; i < alias.length; i++) {
          if (alias[i].trim().startsWith(val)) {
            cityArr.forEach((city) => {
              const thisCity = city;
              if (thisCountry.code === thisCity.country) {
                const duplicates = finalArr.find(obj => obj.city_id === thisCity.city_id);
                if (!duplicates) {
                  thisCity.header = alias[i];
                  finalArr.push(thisCity);
                }
              }
            });
          }
        }
      }
    });

    callback(finalArr);
  });
}

export default class extends Component {
  constructor(api) {
    super();
    this.api = api;
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
          fireSearchEvent(this.api, val, (result) => {
            const thisResult = result;

            searchArea.innerHTML = '';
            thisResult.forEach((param) => {
              const searchResult = SearchResult(param, val);

              searchArea.innerHTML += searchResult;
            });
          });
        } else {
          searchArea.innerHTML = '';
        }
      }, 300);
    });
  }
}

