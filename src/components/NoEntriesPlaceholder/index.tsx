import type { Component } from 'solid-js';
import styles from './style.module.css';
import { addModalToggle, poplutateSelected } from '../../store';
import Button from '../Button';

const handleAddCity = () => {
  addModalToggle();
  poplutateSelected();
};

const NoEntriesPlaceholder: Component = () => {
  return (
    <div class={styles.NoEntriesPlaceholder}>
      <h1>Timeship</h1>

      <img src="android-chrome-192x192.png" alt="timeship logo" />

      <p>
        A world clock at your fingertips. <br /> Timeship displays time from cities all around the
        globe.
      </p>

      <Button elevation={3} onClick={handleAddCity} color="white-primary" iconPrefix>
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Click here to add a city
      </Button>
    </div>
  );
};

export default NoEntriesPlaceholder;
