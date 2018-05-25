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
      <ul class="search__area"></ul>
      <div class="search__close">
        <div class="container">
          <a href="#/" class="search-close-button">
            <svg role="img" class="icon"><use xlink:href="#icon-iconmonstr-plus-2"></use></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}
