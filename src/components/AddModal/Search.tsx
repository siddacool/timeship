import type { Component } from 'solid-js';
import { searchTimezones } from '../../store';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';

const search = (e: any) => {
  searchTimezones(e.target.value);
};

const Search: Component = () => {
  return (
    <div class={`${styles.Search} ${elevationStyles['elevation-2']}`}>
      <input type="search" placeholder="🔎 Search" onInput={search} />
    </div>
  );
};

export default Search;
