import { Component } from 'domr-c';

export default class extends Component {
  constructor(storage, citiesCookie) {
    super();
    this.storage = storage;
    this.cities_cookie = citiesCookie;
  }

  Markup() {
    return `
      <a href="#">
        <svg role="img" class="icon"><use xlink:href="#icon-iconmonstr-x-mark-10"></use></svg>
      </a>
    `;
  }

  Events() {
    this.Click((self, e) => {
      e.preventDefault();
      const thisSelf = self;
      const parent = thisSelf.parentElement;
      const grandParent = parent.parentElement;
      const cityId = parent.getAttribute('data-id');

      if (this.storage.getItem(this.cities_cookie) &&
        JSON.parse(this.storage.getItem(this.cities_cookie)).length) {
        const cookie = JSON.parse(this.storage.getItem(this.cities_cookie));
        const filter = cookie.filter(value => value !== cityId);

        this.storage.setItem(this.cities_cookie, JSON.stringify(filter));
      }

      grandParent.removeChild(parent);
    });
  }
}

