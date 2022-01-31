import { Component } from 'solid-js';
import { selectedFromList } from '../../store';
import OrderPill from './OrderPill';
import styles from './style.module.css';

const Order: Component = () => {
  return (
    <div class={styles.Order}>
      <OrderPill sortBy="selected">Selected ({selectedFromList.data.length})</OrderPill>
      <OrderPill sortBy="Name">Name</OrderPill>
      <OrderPill sortBy="CountryName">Country</OrderPill>
    </div>
  );
};

export default Order;
