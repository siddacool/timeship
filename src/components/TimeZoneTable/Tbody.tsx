import { onMount, For, Show } from 'solid-js';
import type { Component } from 'solid-js';
import styles from './style.module.css';
import TableRow from './TableRow';
import { fetchTimezones, filteredTimeZones } from '../../store';

const Tbody: Component = () => {
  onMount(() => {
    fetchTimezones();
  });

  return (
    <tbody class={styles.Tbody}>
      <Show when={filteredTimeZones().length} fallback={<div>de nada</div>}>
        <For each={filteredTimeZones()}>
          {(timezone, i) => <TableRow {...timezone} index={i() + 1} />}
        </For>
      </Show>
    </tbody>
  );
};

export default Tbody;
