import apiSet from '../api-set';
import HomeContainer from '../Containers/HomeContainer';

const storage = sessionStorage;
const cookie = 'timeship-add-city-data-1';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const homeContainer = new HomeContainer(apiSet.complete, storage, cookie);

  wrapper.innerHTML = homeContainer.Render();
}
