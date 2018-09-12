import { Component } from 'domr-framework';
import fireSearchEvent from './fire-search-event';
import SearchResult from './SearchResult';
import runningTime from '../utils/running-time';
import { saveCityData } from '../utils/db-manipulation';

export default class extends Component {
  constructor() {
    super();
  }

  Markup() {
    return `
      <input type="text" class="search__bar" placeholder="Mumbai, New York"/>
    `;
  }

  Events() {
    let timeout = null;

    this.Keyup((self) => {
      const thisSelf = self;
      const searchBox = thisSelf.parentElement;
      const parent = searchBox.parentElement.parentElement;
      const searchArea = parent.querySelector('.search__area');
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const val = self.value.trim().toLowerCase();
        if (val) {
          fireSearchEvent(val)
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

                saveCityData(cityId, name, country, countryName, timezone)
                .then(() => {
                  location.href = '#/';
                }).catch((err) => {
                  console.log(err);
                });
              });

              runningTime(itm.querySelector('.search__result__time-12'), 'h:mm');
              runningTime(itm.querySelector('.search__result__time-am'), 'a');
              runningTime(itm.querySelector('.search__result__time-24'), 'HH:mm');
            });
          })
          .catch((err) => {
            if (err.toString() === '0') {
              searchArea.innerHTML = `
                <li>
                  <div class="search__err">Unable to connect</div>
                </li>
              `;
            } else if (err === 'Unable to connect') {
              searchArea.innerHTML = `
                <li>
                  <div class="search__err">You Are Offline</div>
                </li>
              `;
            } else if (err === 'No Data') {
              searchArea.innerHTML = `
                <li>
                  <div class="search__err">No Cities found</div>
                </li>
              `;
            } else {
              console.log(err);
            }
          });
        } else {
          searchArea.innerHTML = '';
        }
      }, 300);
    });
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();

    thisSelf.focus();
  }
}

