import { Router } from 'domr-c';
import routes from './routes';

const router = new Router(routes);

const storage = sessionStorage;
const cookieName = 'timeship-loading-screen-displayed';
const loadingScreen = storage.getItem(cookieName);
const spalsh = document.querySelector('.loading-screen');

if (loadingScreen) {
  router.Start();
} else {
  storage.setItem(cookieName, true);
  setTimeout(() => {
    spalsh.classList.add('active');
  }, 400);

  setTimeout(() => {
    router.Start();
  }, 3000);
}

