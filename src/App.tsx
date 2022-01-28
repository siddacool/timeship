import type { Component } from 'solid-js';
import { onMount, Show, Switch, Match } from 'solid-js';
import styles from './App.module.css';
import AddModal from './components/AddModal';
import MenuButton from './components/MenuButton';
import NoEntriesPlaceholder from './components/NoEntriesPlaceholder';
import OrderList from './components/OrderList';
import PreviewList from './components/PreviewList';
import ReorderActions from './components/ReorderActions';
import { addModal, orderList, previewList, updateUtCTime } from './store';
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
    runningTime();
  });

  return (
    <div class={styles.App}>
      <Show when={!orderList.active}>
        <MenuButton />
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

      <Show when={addModal.active}>
        <AddModal />
      </Show>
    </div>
  );
};

export default App;
