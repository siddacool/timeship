import apiSet from '../api-set';
import HomeContainer from '../Containers/HomeContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const homeContainer = new HomeContainer(apiSet.complete);

  wrapper.innerHTML = homeContainer.Render();
}
