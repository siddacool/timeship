import { Component } from 'domr-c';
import { removeCityData } from '../utils/db-manipulation';

export default class extends Component {
  constructor() {
    super();
  }

  Markup() {
    return `
      <a href="#" class="city__delete">
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

      removeCityData(cityId)
      .then((data) => {
        console.log(data);
      });

      grandParent.removeChild(parent);
    });
  }
}

