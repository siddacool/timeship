import type { Component } from 'solid-js';
import { searchTimezones } from '../../store';
import styles from './style.module.css';

const Search: Component = () => {
  const yo = (e: any) => {
    searchTimezones(e.target.value);
  };

  return (
    <div class={styles.Search}>
      Search: :
      <input type="search" name="" onInput={yo} />
    </div>
  );
};

export default Search;
