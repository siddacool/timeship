import SearchBar from '../Components/SearchBar';

export default function (api) {
  const searchBar = new SearchBar(api);

  return `
    <div class="search">
      ${searchBar.Render()}
      <div class="search__area"></div>
    </div>
  `;
}
