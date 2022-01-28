import { registerSW } from 'virtual:pwa-register';
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
  });
}

render(() => <App />, document.getElementById('root') as HTMLElement);
