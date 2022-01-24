import type { Component } from 'solid-js';
import styles from './App.module.css';
import PreviewList from './components/PreviewList';
// import TimeZoneTable from './components/TimeZoneTable';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <PreviewList />
    </div>
  );
};

export default App;
