import { Component, createMemo, Show } from 'solid-js';
import { selectedFromList } from '../../store';
import styles from './style.module.css';

interface IProps {
  isSelected: boolean;
}

const Selected: Component<IProps> = (props) => {
  return (
    <>
      <Show when={props.isSelected}>
        <article class={styles.Selected}>
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
        </article>
      </Show>
    </>
  );
};

export default Selected;
