import { registerSW } from 'virtual:pwa-register';
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

render(() => <App />, document.getElementById('root') as HTMLElement);
