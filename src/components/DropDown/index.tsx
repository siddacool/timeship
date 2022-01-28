import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import {
  actionMenuOpen,
  handleActionMenuToggle,
  orderList,
  orderListActiveToggle,
  previewList,
  addModalToggle,
} from '../../store';

const handleAddCity = () => {
  addModalToggle();
  handleActionMenuToggle();
};

const handleReorder = () => {
  if (orderList.active || !previewList.data.length) {
    return;
  }

  handleActionMenuToggle();
  orderListActiveToggle();
};

const DropDown: Component = () => {
  return (
    <Show when={actionMenuOpen()}>
      <div class={`${styles.DropDown} ${elevationStyles['elevation-4']}`}>
        <ul>
          <li onClick={handleAddCity}>Add city</li>
          <li onClick={handleReorder} data-disable={orderList.active || !previewList.data.length}>
            Reorder
          </li>
        </ul>
      </div>

      <div class={styles.screen} onClick={handleActionMenuToggle}></div>
    </Show>
  );
};

export default DropDown;
