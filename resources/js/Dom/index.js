import { Router } from 'domr-c';
import routes from './routes';

const router = new Router(routes);

const storage = localStorage;
const cookieName = 'timeship-loading-screen-displayed';
const loadingScreen = storage.getItem(cookieName);

if (loadingScreen) {
  router.Start();
} else {
  storage.setItem(cookieName, true);
  setTimeout(() => {
    router.Start();
  }, 3000);
}

