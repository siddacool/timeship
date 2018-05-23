import apiSet from '../api-set';
import localSave from '../browser-storage';
import HomeContainer from '../Containers/HomeContainer';


export default function () {
  const wrapper = document.getElementById('wrapper');
  const homeContainer = new HomeContainer(
    apiSet.complete,
    localSave.storage,
    localSave.cookie,
  );

  wrapper.innerHTML = homeContainer.Render();
}
