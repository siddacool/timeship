function parseData(data) {
  return JSON.parse(data);
}

function stringifyData(data) {
  return JSON.stringify(data);
}


export default function (data) {
  if (data.metadata && data.metadata.city) {
    const cityId = data.metadata.city;
    if (sessionStorage.getItem('timeship-add-city-data-1')) {
      let tempStore = parseData(sessionStorage.getItem('timeship-add-city-data-1'));

      if (tempStore.includes(cityId)) {
        tempStore = tempStore.filter(item => item !== cityId);
      }

      tempStore.push(cityId);

      sessionStorage.setItem('timeship-add-city-data-1', stringifyData(tempStore));
    } else {
      sessionStorage.setItem('timeship-add-city-data-1', stringifyData([cityId]));
    }
    location.href = '#/';
  }
}
