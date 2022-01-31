import { Component, onMount } from 'solid-js';
import { orderList, poplulateOrderListFromPreviewList } from '../../store';
import TimeCardOrder from '../TimeCard/TimeCardOrder';
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
        itemSize={{ height: 130 }}
      >
        {TimeCardOrder}
      </VirtualContainer>
    </div>
  );
};

export default OrderList;
