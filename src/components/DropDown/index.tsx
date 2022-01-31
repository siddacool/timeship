import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import {
  actionMenuOpen,
  darkTheme,
  darkThemeToggle,
  handleActionMenuToggle,
  orderList,
  orderListActiveToggle,
  previewList,
} from '../../store';

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
          <li onClick={handleReorder} data-disable={orderList.active || !previewList.data.length}>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              ></path>
            </svg>
            Reorder (click hold)
          </li>
          <li onClick={darkThemeToggle}>
            <Show when={darkTheme.active}>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </Show>
            Dark theme
          </li>
        </ul>
      </div>

      <div class={styles.screen} onClick={handleActionMenuToggle}></div>
    </Show>
  );
};

export default DropDown;
