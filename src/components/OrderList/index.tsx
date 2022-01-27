import { Component, onMount } from 'solid-js';
import { orderList, poplulateOrderListFromPreviewList } from '../../store';
import TimeCard from '../TimeCard';
import styles from './style.module.css';
import { VirtualContainer } from '@minht11/solid-virtual-container';

const OrderList: Component = () => {
  let scrollTargetElement!: HTMLDivElement;

  onMount(() => {
    poplulateOrderListFromPreviewList();
  });

  return (
    <div style={{ overflow: 'auto' }} ref={scrollTargetElement} class={styles.OrderList}>
      <VirtualContainer
        items={orderList.data}
        scrollTarget={scrollTargetElement}
        itemSize={{ height: 120 }}
      >
        {TimeCard}
      </VirtualContainer>
    </div>
  );
};

export default OrderList;
