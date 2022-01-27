import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import {
  actionMenuOpen,
  handleActionMenuToggle,
  orderList,
  orderListActiveToggle,
} from '../../store';

const handleAddCity = () => {
  console.log('add city');
  handleActionMenuToggle();
};

const handleReorder = () => {
  if (orderList.active) {
    return;
  }

  handleActionMenuToggle();
  orderListActiveToggle();
};

const handleOpenSettings = () => {
  console.log('open settings');
  handleActionMenuToggle();
};

const DropDown: Component = () => {
  return (
    <Show when={actionMenuOpen()}>
      <div class={`${styles.DropDown} ${elevationStyles['elevation-4']}`}>
        <ul>
          <li onClick={handleAddCity}>Add city</li>
          <li onClick={handleReorder} data-disable={orderList.active}>
            Reorder
          </li>
          <li onClick={handleOpenSettings}>Settings</li>
        </ul>
      </div>

      <div class={styles.screen} onClick={handleActionMenuToggle}></div>
    </Show>
  );
};

export default DropDown;
