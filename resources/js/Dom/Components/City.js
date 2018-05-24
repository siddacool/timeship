import DeleteBtn from './CityDeleteButton';

export default function (param) {
  const deleteBtn = new DeleteBtn();

  return `
    <li class="city" data-id="${param.city_id}">
      <div class="city__half">
        <span class="city__name">${param.name}</span>
        <span class="city__country-name">${param.country_name}</span>
        <span class="city__country">(${param.country})</span>
      </div>
      <div class="city__half">
        <span class="city__time" data-timezone="${param.timezone}">...</span>
        <span class="city__time city__time--24" data-timezone="${param.timezone}">...</span>
        <span class="city__timezone">${param.timezone}</span>
        ${deleteBtn.Render()}
      </div>
    </li>
  `;
}

