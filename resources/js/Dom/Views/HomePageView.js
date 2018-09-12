import HomeContainer from '../Containers/HomeContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const homeContainer = new HomeContainer();

  wrapper.innerHTML = homeContainer.Render();
}
