import goodOlAjax from '../utils/good-ol-ajax-promise';

function fireSearchEvent(api, searchTerm) {
  const promiseObj = new Promise((resolve, reject) => {
    goodOlAjax(api)
    .then((result) => {
      const arr = result;
      const arrSorted = arr.sort((a, b) => a.name.localeCompare(b.name));
      const cityArr = arrSorted.filter(e => e.city_id);
      const countryArr = arrSorted.filter(e => e.country_id);
      const val = searchTerm;
      let finalArr = [];

      cityArr.forEach((city) => {
        const thisCity = city;
        const assignCountry = countryArr.filter(e => e.code === thisCity.country);
        thisCity.country_name = assignCountry[0].name;
        if (thisCity.name.startsWith(val)) {
          thisCity.priority = 1;
          finalArr.push(thisCity);
        } else if (thisCity.alias && thisCity.alias.length) {
          const alias = thisCity.alias;
          for (let i = 0; i < alias.length; i++) {
            if (alias[i].trim().startsWith(val)) {
              thisCity.header = alias[i];
              thisCity.priority = 3;
              finalArr.push(thisCity);
            }
          }
        }
      });

      countryArr.forEach((country) => {
        const thisCountry = country;
        if (thisCountry.name.startsWith(val)) {
          cityArr.forEach((city) => {
            const thisCity = city;
            if (thisCountry.code === thisCity.country) {
              const duplicates = finalArr.find(obj => obj.city_id === thisCity.city_id);
              if (!duplicates) {
                thisCity.header = thisCountry.name;
                thisCity.priority = 2;
                finalArr.push(thisCity);
              }
            }
          });
        } else if (thisCountry.alias && thisCountry.alias.length) {
          const alias = thisCountry.alias;
          for (let i = 0; i < alias.length; i++) {
            if (alias[i].trim().startsWith(val)) {
              cityArr.forEach((city) => {
                const thisCity = city;
                if (thisCountry.code === thisCity.country) {
                  const duplicates = finalArr.find(obj => obj.city_id === thisCity.city_id);
                  if (!duplicates) {
                    thisCity.header = alias[i];
                    thisCity.priority = 4;
                    finalArr.push(thisCity);
                  }
                }
              });
            }
          }
        }
      });

      if (finalArr.length) {
        finalArr = finalArr.sort((a, b) => a.priority < b.priority ? -1 : 1);
        resolve(finalArr);
      } else {
        reject('No Data');
      }
    }).catch((err) => {
      reject(err);
    });
  });

  return promiseObj;
}

export default fireSearchEvent;
