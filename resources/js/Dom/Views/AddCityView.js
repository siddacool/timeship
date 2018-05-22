import localSave from '../browser-storage';

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
    location.href = '#/';
  }
}
