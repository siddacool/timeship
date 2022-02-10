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
  settings,
  utcDetailsToggle,
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
            <Show
              when={darkTheme.active}
              fallback={
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              }
            >
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
          <li onClick={utcDetailsToggle}>
            <Show
              when={settings.utcDetails}
              fallback={
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              }
            >
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
            UTC details
          </li>
        </ul>
      </div>

      <div class={styles.screen} onClick={handleActionMenuToggle}></div>
    </Show>
  );
};

export default DropDown;
