import apiSet from '../api-set';
import SearchContainer from '../Containers/SearchContainer';

export default function (data) {
  let api = apiSet.complete;

  if (data && data.query && data.query.cached === 'true') {
    api = apiSet.complete_catched;
  }
  const wrapper = document.getElementById('wrapper');
  const searchContainer = SearchContainer(api);

  wrapper.innerHTML = searchContainer;
}
