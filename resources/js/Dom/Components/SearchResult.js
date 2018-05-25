function bolden(text, searchTerm) {
  const unboldText = text.replace(searchTerm, '');

  return `
    <span><b>${searchTerm}</b>${unboldText}</span>
  `;
}

export default function (param, searchTerm) {
  return `
    <li>
      <a href="#" class="search__result" data-id="${param.city_id}">
        <span class="search__result__header">${param.header ? bolden(param.header, searchTerm) : ''}</span>
        <div class="search__result__half">
          <div class="search__result__group">
            <span class="search__result__name" data-value="${param.name}">${param.header ? param.name : bolden(param.name, searchTerm)}</span>
          </div>
          <div class="search__result__group">
            <span class="search__result__country-name">${param.country_name}</span>
            (<span class="search__result__country">${param.country}</span>)
          </div>
        </div>
        <div class="search__result__half">
          <div class="search__result__group">
            <span class="search__result__time-12" data-timezone="${param.timezone}">...</span>
            <span class="search__result__time-am" data-timezone="${param.timezone}">...</span>
          </div>
          <div class="search__result__group">
            <span class="search__result__time-24" data-timezone="${param.timezone}">...</span>
            GMT <span class="search__result__timezone">${param.timezone}</span>
          </div>
        </div>
      </a>
    </li>
  `;
}
