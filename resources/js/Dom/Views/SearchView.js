import SearchContainer from '../Containers/SearchContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const searchContainer = SearchContainer();

  wrapper.innerHTML = searchContainer;
}
