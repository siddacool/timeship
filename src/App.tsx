import type { Component } from 'solid-js';
import styles from './App.module.css';
import TimeZoneTable from './components/TimeZoneTable';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <TimeZoneTable />
    </div>
  );
};

export default App;
