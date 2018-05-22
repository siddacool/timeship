import apiSet from '../api-set';
import localSave from '../browser-storage';
import HomeContainer from '../Containers/HomeContainer';

export default function (data) {
  const wrapper = document.getElementById('wrapper');
  const homeContainer = new HomeContainer(
    apiSet.complete,
    localSave.storage,
    localSave.cookie,
    localSave.offline,
  );

  console.log(data);

  wrapper.innerHTML = homeContainer.Render();
}
