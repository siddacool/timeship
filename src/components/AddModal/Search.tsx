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
      <button>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
