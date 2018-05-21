import apiSet from '../api-set';
import SearchContainer from '../Containers/SearchContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const searchContainer = SearchContainer(apiSet.complete);

  wrapper.innerHTML = searchContainer;
}
