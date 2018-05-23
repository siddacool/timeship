import apiSet from '../api-set';
import localSave from '../browser-storage';
import SearchContainer from '../Containers/SearchContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const searchContainer = SearchContainer(
    apiSet.complete,
    localSave.storage,
    localSave.cookie,
  );

  wrapper.innerHTML = searchContainer;
}
