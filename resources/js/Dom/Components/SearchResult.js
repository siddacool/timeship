function bolden(text, searchTerm) {
  const unboldText = text.replace(searchTerm, '');

  return `
    <span><b>${searchTerm}</b>${unboldText}</span>
  `;
}

export default function (param, searchTerm) {
  return `
    <li class="search__result" data-id="${param.city_id}">
      <span>${param.header ? bolden(param.header, searchTerm) : ''}</span>
      <span>${param.header ? param.name : bolden(param.name, searchTerm)}</span>
      <span>${param.timezone}</span>
      <span>${param.country}</span>
    </li>
  `;
}
