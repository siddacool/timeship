import { Component, createSignal, Show } from 'solid-js';
import { searchTimezones } from '../../store';
import Button from '../Button';
import styles from './style.module.css';

const [searchText, setSearchText] = createSignal('');

const search = (e: any) => {
  searchTimezones(e.target.value);
  setSearchText(`${e.target.value}`);
};

const searchClear = () => {
  setSearchText('');
  searchTimezones('');
};

const Search: Component = () => {
  return (
    <div class={styles.Search}>
      <div class={styles.SearchIcon}>
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input type="search" placeholder="Search" onInput={search} value={searchText()} />
      <Show when={searchText() && searchText().trim() !== ''}>
        <Button rounded onClick={searchClear}>
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
        </Button>
      </Show>
    </div>
  );
};

export default Search;
