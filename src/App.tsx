import type { Component } from 'solid-js';
import { onMount, Show } from 'solid-js';
import styles from './App.module.css';
import AddModal from './components/AddModal';
import MenuButton from './components/MenuButton';
import OrderList from './components/OrderList';
import PreviewList from './components/PreviewList';
import ReorderActions from './components/ReorderActions';
import { addModal, orderList, updateUtCTime } from './store';
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
      <MenuButton />

      <Show when={orderList.active} fallback={() => <PreviewList />}>
        <OrderList />
        <ReorderActions />
      </Show>

      <Show when={addModal.active}>
        <AddModal />
      </Show>
    </div>
  );
};

export default App;
