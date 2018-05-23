import DeleteBtn from './CityDeleteButton';

export default function (param, storage, citiesCookie) {
  const deleteBtn = new DeleteBtn(storage, citiesCookie);

  return `
    <li class="city" data-id="${param.city_id}">
      <span class="city__name">${param.name}</span>
      <span class="city__country">${param.country}</span>
      <span class="city__country-name">${param.country_name}</span>
      <span class="city__time" data-timezone="${param.timezone}">...</span>
      <span class="city__time city__time--24" data-timezone="${param.timezone}">...</span>
      <span class="city__timezone">${param.timezone}</span>
      ${deleteBtn.Render()}
    </li>
  `;
}

