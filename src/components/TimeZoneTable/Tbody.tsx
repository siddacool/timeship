import { createSignal, onMount, For } from 'solid-js';
import type { Component } from 'solid-js';
import styles from './style.module.css';
import TableRow from './TableRow';

const Tbody: Component = () => {
  const [timezones, setTimezones] = createSignal([]);

  onMount(async () => {
    const res = await fetch('./data.json');
    const json = await res.json();

    setTimezones(json);
  });

  return (
    <tbody class={styles.Tbody}>
      <For each={timezones()}>{(timezone, i) => <TableRow {...timezone} index={i() + 1} />}</For>
    </tbody>
  );
};

export default Tbody;
