import { Component } from 'solid-js';
import { orderTimezones, selectedFromList } from '../../store';
import OrderPill from './OrderPill';
import styles from './style.module.css';

const Order: Component = () => {
  return (
    <div class={styles.Order}>
      <OrderPill onClick={() => orderTimezones('selected')} sortBy="selected">
        Selected ({selectedFromList.data.length})
      </OrderPill>
    </div>
  );
};

export default Order;
