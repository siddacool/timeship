import type { Component } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import { addModalToggle, poplutateSelected } from '../../store';

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

      <button class={elevationStyles['elevation-3']} onClick={handleAddCity}>
        + Click here to add a city
      </button>
    </div>
  );
};

export default NoEntriesPlaceholder;
