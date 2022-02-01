import type { Component } from 'solid-js';
import { onMount, Show, Switch, Match } from 'solid-js';
import styles from './App.module.css';
import AddModal from './components/AddModal';
import Menu from './components/Menu';
import NoEntriesPlaceholder from './components/NoEntriesPlaceholder';
import OrderList from './components/OrderList';
import PreviewList from './components/PreviewList';
import ReorderActions from './components/ReorderActions';
import { addModal, darkTheme, orderList, previewList, updateUtCTime } from './store';
// import TimeZoneTable from './components/TimeZoneTable';

function runningTime() {
  function step() {
    updateUtCTime();

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const App: Component = () => {
  onMount(() => {
    const body = document.querySelector('body');
    if (darkTheme.active) {
      body?.classList.add('dark');
    }

    runningTime();
  });

  return (
    <>
      <div class={`${styles.App} ${addModal.active ? styles.blur : ''}`}>
        <Show when={!orderList.active}>
          <Menu />
        </Show>

        <Switch fallback={<NoEntriesPlaceholder />}>
          <Match when={previewList.data.length && orderList.active}>
            <OrderList />
            <ReorderActions />
          </Match>
          <Match when={previewList.data.length && !orderList.active}>
            <PreviewList />
          </Match>
        </Switch>
      </div>
      <Show when={addModal.active}>
        <AddModal />
      </Show>
    </>
  );
};

export default App;
