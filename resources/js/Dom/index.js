import DateTime from 'luxon/src/datetime';
import { Router } from 'domr-framework';
import routes from './routes';

const router = new Router(routes);

const storage = localStorage;
const cookieName = 'timeship-loading-screen-displayed-1';
const loadingScreen = storage.getItem(cookieName);
const spalsh = document.querySelector('.loading-screen');

function delayedRouterStart() {
  setTimeout(() => {
    spalsh.classList.add('active');
  }, 400);

  setTimeout(() => {
    router.Start();
  }, 1000);
}

if (loadingScreen) {
  const timeWhenLoadingScreen = DateTime.fromMillis(loadingScreen);
  const timeNow = DateTime.local();

  const diffHours = timeNow.diff(timeWhenLoadingScreen, 'hours');
  const diffHoursObject = diffHours.toObject();

  if (diffHoursObject.hours >= 48) {
    delayedRouterStart();
  } else {
    router.Start();
  }

  storage.setItem(cookieName, DateTime.local().toMillis());
} else {
  delayedRouterStart();
  storage.setItem(cookieName, DateTime.local().toMillis());
}
