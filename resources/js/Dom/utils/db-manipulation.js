import db from '../indexed-storage';

function saveCityData(city_id, name, country, country_name, timezone) {
  const promiseObj = new Promise((resolve, reject) => {
    let date = new Date();
    date = Date.parse(date);
    db.cities.put({ city_id, name, country, country_name, timezone, date })
    .then((id) => {
      return db.cities.get(id);
    })
    .then((item) => {
      resolve(item);
    })
    .catch((err) => {
      reject(err.stack || err);
    });
  });
  return promiseObj;
}

function getCityDataAll() {
  const promiseObj = new Promise((resolve, reject) => {
    db.cities.orderBy('date').toArray((data) => {
      return data;
    }).then((data) => {
      resolve(data);
    }).catch((err) => {
      reject(err.stack || err);
    });
  });

  return promiseObj;
}

function removeCityData(city_id) {
  const promiseObj = new Promise((resolve, reject) => {
    db.cities.delete(city_id, () => {}).then(() => {
      resolve(city_id);
    }).catch((err) => {
      reject(err.stack || err);
    });
  });

  return promiseObj;
}

export {
  saveCityData,
  getCityDataAll,
  removeCityData,
};
