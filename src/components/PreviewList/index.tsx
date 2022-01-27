import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { For } from 'solid-js';
import { previewList, updateUtCTime } from '../../store';
import TimeCard from '../TimeCard';
import styles from './style.module.css';
import { VirtualContainer } from '@minht11/solid-virtual-container';

function runningTime() {
  function step() {
    updateUtCTime();

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const ListItem = (props) => {
  console.log(props.item);

  return (
    <div
      // Required for items to switch places.
      style={{ ...props.style, width: '100%' }}
      // Used for keyboard navigation and accessibility.
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <div>{props.item.item}</div>
    </div>
  );
};

const PreviewList: Component = () => {
  onMount(() => {
    runningTime();
  });

  let scrollTargetElement!: HTMLDivElement;

  return (
    <div style={{ overflow: 'auto' }} ref={scrollTargetElement} class={styles.PreviewList}>
      <VirtualContainer
        items={previewList.data}
        scrollTarget={scrollTargetElement}
        itemSize={{ height: 120 }}
      >
        {TimeCard}
      </VirtualContainer>
    </div>
  );
};

export default PreviewList;
