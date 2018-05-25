import SearchBar from '../Components/SearchBar';

export default function (api) {
  const searchBar = new SearchBar(api);

  return `
    <div class="search container">
      <div class="search__box">
        <div class="search__box__ui container">
          <a href="#/" class="search-icon">
            <svg role="img" class="icon"><use xlink:href="#icon-iconmonstr-arrow-64"></use></svg>
          </a>
          ${searchBar.Render()}
        </div>
      </div>
      <div class="search__area"></div>
    </div>
  `;
}
