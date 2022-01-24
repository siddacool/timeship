import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { previewList } from '../../store';
import TimeCard from '../TimeCard';
import styles from './style.module.css';

const PreviewList: Component = () => {
  return (
    <div class={styles.PreviewList}>
      <For each={previewList.data}>{(listItem) => <TimeCard {...listItem} />}</For>
    </div>
  );
};

export default PreviewList;
