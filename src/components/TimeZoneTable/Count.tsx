import { Component, createMemo } from 'solid-js';
import { filteredTimeZones, timezones } from '../../store';
import styles from './style.module.css';

const Count: Component = () => {
  return (
    <span class={styles.Count}>
      {filteredTimeZones().length}/{timezones.data.length}
    </span>
  );
};

export default Count;
