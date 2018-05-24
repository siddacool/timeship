import { Component } from 'domr-c';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import { saveCityData, getCityDataAll } from '../utils/db-manipulation';
import runningTime from '../utils/running-time';
import getTimeZone from '../utils/get-timezone';
import City from '../Components/City';

function liveTime(target) {
  const city = target;
  runningTime(city.querySelector('.city__time'), 'h:mm');
  runningTime(city.querySelector('.city__time--am'), 'a');
  runningTime(city.querySelector('.city__time--day'), 'cccc, LLL dd');
  runningTime(city.querySelector('.city__time--24'), 'HH:mm');
}

export default class extends Component {
  constructor(api) {
    super();
    this.api = api;
  }

  Markup() {
    return `
      <div class="timezone container">
        <ul class="timezone__city"></ul>
        <div class="timezone__add">
          <div class="container">
            <a href="#/search" class="city-new-add">
              <svg role="img" class="icon"><use xlink:href="#icon-iconmonstr-plus-2"></use></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const ul = thisSelf.querySelector('.timezone__city');

    getCityDataAll()
    .then((data) => {
      if (data.length >= 4) {
        const dl = data.length;
        if (dl >= 4 && dl <= 6) {
          ul.setAttribute('data-level', '1');
        } else if (dl >= 7 && dl <= 10) {
          ul.setAttribute('data-level', '2');
        } else {
          ul.setAttribute('data-level', '3');
        }
      } else {
        ul.setAttribute('data-level', '0');
      }

      data.forEach((itm) => {
        const city = City(itm);
        ul.innerHTML += city;
      });

      ul.querySelectorAll('li').forEach((city) => {
        liveTime(city);
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
        const countryName = thisCity.country_name;
        const timezone = thisCity.timezone;
        const city = City(thisCity);
        ul.innerHTML = city;

        const li = ul.querySelector('li');

        liveTime(li);

        saveCityData(cityId, name, country, countryName, timezone)
        .catch((err) => {
          console.log(err);
        });

        ul.setAttribute('data-level', '0');
      }).catch((errAjax) => {
        console.log(errAjax);
        ul.setAttribute('data-level', '0');
      });
    });
  }
}
