import { Component } from 'domr-c';
import fireSearchEvent from './fire-search-event';
import SearchResult from './SearchResult';

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
          fireSearchEvent(this.api, val)
          .then((result) => {
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

