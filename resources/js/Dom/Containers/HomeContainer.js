import { Component } from 'domr-c';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import { getCityDataAll } from '../utils/db-manipulation';
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

    getCityDataAll()
    .then((data) => {
      data.forEach((itm) => {
        const city = City(itm, this.storage, this.cities_cookie);
        ul.innerHTML += city;
      });

      ul.querySelectorAll('li').forEach((city) => {
        runningTime(city.querySelector('.city__time'), 'hh:mm:ssa dd MMM');
        runningTime(city.querySelector('.city__time--24'), 'HH:mm:ss');
      });
    }).catch((errDb) => {
      goodOlAjax(this.api)
      .then((result) => {
        const citiesArr = [];
        const timezone = getTimeZone();

        result.forEach((itm) => {
          if (itm.city_id && timezone === itm.timezone) {
            const thisCity = itm;
            const countryName = result.filter(e => e.country_id && e.code === thisCity.country);
            thisCity.country_name = countryName[0].name;
            citiesArr.push(thisCity);
          }
        });

        const city = City(citiesArr[0], this.storage, this.cities_cookie);
        ul.innerHTML = city;

        const li = ul.querySelector('li');

        runningTime(li.querySelector('.city__time'), 'hh:mm:ssa dd MMM');
        runningTime(li.querySelector('.city__time--24'), 'HH:mm:ss');
      }).catch((errAjax) => {
        console.log(errAjax);
      });
    });
  }
}
