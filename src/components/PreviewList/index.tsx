import type { Component } from 'solid-js';
import { previewList } from '../../store';
import TimeCard from '../TimeCard';
import styles from './style.module.css';
import { VirtualContainer } from '@minht11/solid-virtual-container';

const PreviewList: Component = () => {
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
