import { Component } from 'solid-js';
import styles from './style.module.css';
import { saveOrderList, cancelOrderList } from '../../store';

const ReorderActions: Component = () => {
  return (
    <div class={styles.ReorderActions}>
      <button onClick={() => saveOrderList()}>Save</button>
      <button onClick={() => cancelOrderList()}>Cancel</button>
    </div>
  );
};

export default ReorderActions;
