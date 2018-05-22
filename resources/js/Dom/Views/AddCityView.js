import apiSet from '../api-set';
import localSave from '../browser-storage';
import goodOlAjax from '../utils/good-ol-ajax-promise';

function parseData(data) {
  return JSON.parse(data);
}

function stringifyData(data) {
  return JSON.stringify(data);
}


export default function (data) {
  if (data.metadata && data.metadata.city) {
    const cityId = data.metadata.city;
    if (localSave.storage.getItem(localSave.cookie)) {
      let tempStore = parseData(localSave.storage.getItem(localSave.cookie));

      if (tempStore.includes(cityId)) {
        tempStore = tempStore.filter(item => item !== cityId);
      }

      tempStore.push(cityId);

      localSave.storage.setItem(localSave.cookie, stringifyData(tempStore));
    } else {
      localSave.storage.setItem(localSave.cookie, stringifyData([cityId]));
    }

    goodOlAjax(apiSet.complete)
    .then((result) => {
      const thisResult = result;
      const cityArr = thisResult.filter(e => e.city_id);
      const finalArr = [];

      cityArr.forEach((city) => {
        if (city.city_id === cityId) {
          const thisCity = city;
          const countryName = thisResult.filter(e => e.country_id && e.code === thisCity.country);

          thisCity.country_name = countryName[0].name;
          finalArr.push(thisCity);
        }
      });

      if (localSave.storage.getItem(localSave.offline)) {
        let tempStore = parseData(localSave.storage.getItem(localSave.offline));
        const tempStoreFilter = tempStore.filter(e => e.city_id === cityId);

        if (tempStoreFilter && tempStoreFilter.length && tempStoreFilter.length <= 20) {
          tempStore = tempStore.filter(e => e.city_id !== cityId);
        }

        tempStore.push(finalArr[0]);

        localSave.storage.setItem(localSave.offline, stringifyData(tempStore));
      } else {
        localSave.storage.setItem(localSave.offline, stringifyData([finalArr[0]]));
      }
    })
    .catch((err) => {
      console.log(err);
    });

    location.href = '#/';
  }
}
