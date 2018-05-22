function bolden(text, searchTerm) {
  const unboldText = text.replace(searchTerm, '');

  return `
    <span><b>${searchTerm}</b>${unboldText}</span>
  `;
}

export default function (param, searchTerm) {
  return `
    <li data-id="${param.city_id}">
      <a href="#/add/${param.city_id}" class="search__result">
        <span class="search__result__header">${param.header ? bolden(param.header, searchTerm) : ''}</span>
        <span class="search__result__name">${param.header ? param.name : bolden(param.name, searchTerm)}</span>
        <span class="search__result__time" data-timezone="${param.timezone}">...</span>
        <span class="search__result__timezone">${param.timezone}</span>
        <span class="search__result__country">${param.country}</span>
        <span class="search__result__country-name">${param.country_name}</span>
      </a>
    </li>
  `;
}
