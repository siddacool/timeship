import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { For } from 'solid-js';
import { previewList, updateUtCTime } from '../../store';
import TimeCard from '../TimeCard';
import styles from './style.module.css';

function runningTime() {
  function step() {
    updateUtCTime();

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const PreviewList: Component = () => {
  onMount(() => {
    runningTime();
  });

  return (
    <div class={styles.PreviewList}>
      <For each={previewList.data}>{(listItem) => <TimeCard {...listItem} />}</For>
    </div>
  );
};

export default PreviewList;
