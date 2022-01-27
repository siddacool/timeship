import type { Component } from 'solid-js';
import { orderListSetOrder } from '../../store';
import styles from './style.module.css';

const handleUpArrowClick = (id: string) => {
  orderListSetOrder(id, 'up');
};

const handleDownArrowClick = (id: string) => {
  orderListSetOrder(id, 'down');
};

interface IProps {
  id: string;
}

const ReorderArrows: Component<IProps> = (props) => {
  return (
    <div class={styles.ReorderArrows}>
      <div>
        <button onClick={() => handleUpArrowClick(props.id)}>
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
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            ></path>
          </svg>
        </button>
        <button onClick={() => handleDownArrowClick(props.id)}>
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
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReorderArrows;
