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
        <div class="city__time-master">
          <div class="city__time-group">
            <span class="city__time city__time--12" data-timezone="${param.timezone}">...</span>
            <span class="city__time city__time--am" data-timezone="${param.timezone}">...</span>
          </div>
          <div class="city__time-group">
            <span class="city__time city__time--day" data-timezone="${param.timezone}">...</span>
          </div>
          <div class="city__time-group">
            <span class="city__time city__time--24" data-timezone="${param.timezone}">...</span>
            <span class="city__timezone">GMT ${param.timezone}</span>
          </div>
        </div>
      </div>
      ${deleteBtn.Render()}
    </li>
  `;
}

