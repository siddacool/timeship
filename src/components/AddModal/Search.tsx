import type { Component } from 'solid-js';
import styles from './style.module.css';

const Search: Component = () => {
  return (
    <div class={styles.Search}>
      <input type="text" placeholder="🔎 Search" />
    </div>
  );
};

export default Search;
