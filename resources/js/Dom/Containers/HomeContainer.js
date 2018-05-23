import { Component } from 'domr-c';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import runningTime from '../utils/running-time';
import getTimeZone from '../utils/get-timezone';
import City from '../Components/City';
import AddNewCity from '../Components/AddNewCity';

export default class extends Component {
  constructor(api, storage, citiesCookie) {
    super();
    this.api = api;
    this.storage = storage;
    this.cities_cookie = citiesCookie;
  }

  Markup() {
    const addNewCity = AddNewCity();

    return `
      <div class="timezone">
        <ul></ul>
        ${addNewCity}
      </div>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const ul = thisSelf.querySelector('ul');


    goodOlAjax(this.api)
    .then((result) => {
      const citiesArr = [];
      const finalArr = [];

      result.forEach((itm) => {
        if (itm.city_id) {
          const thisCity = itm;
          const countryName = result.filter(e => e.country_id && e.code === thisCity.country);
          thisCity.country_name = countryName[0].name;
          citiesArr.push(thisCity);
        }
      });

      if (this.storage.getItem(this.cities_cookie)
        && JSON.parse(this.storage.getItem(this.cities_cookie)).length) {
        const cookie = JSON.parse(this.storage.getItem(this.cities_cookie));
        cookie.forEach((city) => {
          const filter = citiesArr.filter(e => e.city_id === city);

          finalArr.push(filter[0]);
        });
      } else {
        let filter = result.filter(e => e.timezone === getTimeZone());

        if (!filter.length) {
          filter = result.filter(e => e.name === 'new york');
        }

        finalArr.push(filter[0]);
      }

      finalArr.forEach((itm) => {
        const city = City(itm, this.storage, this.cities_cookie, this.cities_offline);
        ul.innerHTML += city;
      });

      ul.querySelectorAll('li').forEach((city) => {
        runningTime(city.querySelector('.city__time'), 'hh:mm:ssA DD MMM');
        runningTime(city.querySelector('.city__time--24'), 'HH:mm:ss');
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
