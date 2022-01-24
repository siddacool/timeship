import type { Component } from 'solid-js';
import Search from './Search';
import SortableHead from './SortableHead';
import styles from './style.module.css';
import Tbody from './Tbody';

const TimeZoneTable: Component = () => {
  return (
    <div class={styles.TimeZoneTable}>
      <Search />

      <div className={styles.tableInner}>
        <table class={styles.table}>
          <thead class={styles.thead}>
            <tr>
              <th>Index</th>
              <SortableHead name="Name" />
              <th>Timestamp</th>
              <th>Timezone</th>
              <SortableHead name="CountryCode" />
              <SortableHead name="CountryName" />
            </tr>
          </thead>
          <Tbody />
        </table>
      </div>
    </div>
  );
};

export default TimeZoneTable;
