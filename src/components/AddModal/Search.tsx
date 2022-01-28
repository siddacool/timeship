import type { Component } from 'solid-js';
import { searchTimezones } from '../../store';
import styles from './style.module.css';

const search = (e: any) => {
  searchTimezones(e.target.value);
};

const Search: Component = () => {
  return (
    <div class={styles.Search}>
      <input type="search" placeholder="🔎 Search" onInput={search} />
    </div>
  );
};

export default Search;
