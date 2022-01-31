import type { Component } from 'solid-js';
import { saveOrderList } from '../../store';
import Button from '../Button';
import styles from './style.module.css';

const AcceptButton: Component = () => {
  return (
    <Button class={styles.AcceptButton} onClick={saveOrderList} rounded>
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
    </Button>
  );
};

export default AcceptButton;
