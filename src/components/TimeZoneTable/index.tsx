import type { Component } from 'solid-js';
import styles from './style.module.css';
import Tbody from './Tbody';

const TimeZoneTable: Component = () => {
  return (
    <div class={styles.TimeZoneTable}>
      <table class={styles.table}>
        <thead class={styles.thead}>
          <tr>
            <th>Index</th>
            <th>Timestamp</th>
            <th>Timezone</th>
            <th>CountryCode</th>
            <th>CountryName</th>
            <th>Cities</th>
          </tr>
        </thead>
        <Tbody />
      </table>
    </div>
  );
};

export default TimeZoneTable;
