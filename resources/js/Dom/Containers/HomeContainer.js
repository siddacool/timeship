import { Component } from 'domr-framework';
import { GetAllPlaces } from 'purple-maps-api';
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
        <div class="timezone__world">
          <div class="container">
            <span class="world-time__title">UTC Time</span>
            <span class="world-time__12" data-timezone="+00:00">...</span>
            <span class="world-time__day" data-timezone="+00:00">...</span>
          </div>
        </div>
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
    const worldTime = thisSelf.querySelector('.world-time__12');
    const worldTimeDay = thisSelf.querySelector('.world-time__day');

    runningTime(worldTime, 'h:mm a');
    runningTime(worldTimeDay, 'cccc, LLL dd');

    getCityDataAll()
    .then((data) => {
      if (data.length > 4) {
        ul.setAttribute('data-level', '1');
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
      GetAllPlaces()
      .then((result) => {
        if (result !== '' && result.length > 0) {
          const citiesArr = [];
          const localtimezone = getTimeZone();

          result.forEach((itm) => {
            if (itm.city_id && localtimezone === itm.timezone) {
              const thisCity = itm;
              thisCity.country = thisCity.country_code;
              const countryName = result.filter(e => e.country_id && e.country_code === thisCity.country);
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

          console.log(countryName, country);

          const li = ul.querySelector('li');

          liveTime(li);

          saveCityData(cityId, name, country, countryName, timezone)
          .catch((err) => {
            console.log(err);
          });

          ul.setAttribute('data-level', '0');
        }
      }).catch((errAjax) => {
        console.log(errAjax);
        ul.setAttribute('data-level', '0');
      });
    });
  }
}
