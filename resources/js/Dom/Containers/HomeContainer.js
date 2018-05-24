import { Component } from 'domr-c';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import { saveCityData, getCityDataAll } from '../utils/db-manipulation';
import runningTime from '../utils/running-time';
import getTimeZone from '../utils/get-timezone';
import City from '../Components/City';
import AddNewCity from '../Components/AddNewCity';

export default class extends Component {
  constructor(api) {
    super();
    this.api = api;
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
        const city = City(itm);
        ul.innerHTML += city;
      });

      ul.querySelectorAll('li').forEach((city) => {
        runningTime(city.querySelector('.city__time'), 'hh:mm:ssa dd MMM');
        runningTime(city.querySelector('.city__time--24'), 'HH:mm:ss');
      });
    }).catch(() => {
      goodOlAjax(this.api)
      .then((result) => {
        const citiesArr = [];
        const localtimezone = getTimeZone();

        result.forEach((itm) => {
          if (itm.city_id && localtimezone === itm.timezone) {
            const thisCity = itm;
            const countryName = result.filter(e => e.country_id && e.code === thisCity.country);
            thisCity.country_name = countryName[0].name;
            citiesArr.push(thisCity);
          }
        });

        const thisCity = citiesArr[0];
        const cityId = thisCity.city_id;
        const name = thisCity.name;
        const country = thisCity.country;
        const countryName = thisCity.countryName;
        const timezone = thisCity.timezone;
        const city = City(thisCity);
        ul.innerHTML = city;

        const li = ul.querySelector('li');

        runningTime(li.querySelector('.city__time'), 'hh:mm:ssa dd MMM');
        runningTime(li.querySelector('.city__time--24'), 'HH:mm:ss');

        saveCityData(cityId, name, country, countryName, timezone)
        .catch((err) => {
          console.log(err);
        });
      }).catch((errAjax) => {
        console.log(errAjax);
      });
    });
  }
}
