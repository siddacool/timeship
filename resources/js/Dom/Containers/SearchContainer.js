import SearchBar from '../Components/SearchBar';

export default function (api, storage, citiesCookie) {
  const searchBar = new SearchBar(api, storage, citiesCookie);

  return `
    <div class="search">
      ${searchBar.Render()}
      <div class="search__area"></div>
    </div>
  `;
}
