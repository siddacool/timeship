import { Component } from 'solid-js';
import styles from './style.module.css';
import { saveOrderList, cancelOrderList } from '../../store';
import AcceptDualButton from '../AcceptDualButton';

const ReorderActions: Component = () => {
  return (
    <div class={styles.ReorderActions}>
      <AcceptDualButton
        actionAccept={() => saveOrderList()}
        actionCancel={() => cancelOrderList()}
      />
    </div>
  );
};

export default ReorderActions;
