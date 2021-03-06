import Dexie from 'dexie';

const db = new Dexie('timeship-add-city-data-2');
db.version(1).stores({
  cities: 'city_id, name, country, country_name, timezone, date',
});

export default db;
