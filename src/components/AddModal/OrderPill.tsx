import { Component, splitProps, Switch, Match } from 'solid-js';
import { timezones } from '../../store';
import styles from './style.module.css';

const ArrowsGroup: Component = () => {
  return (
    <div class={styles.arrowsGroup}>
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
    </div>
  );
};

interface IProps {
  sortBy: string;
  onClick: any;
}

const OrderPill: Component<IProps> = (props) => {
  const [local, others] = splitProps(props, ['children', 'sortBy']);

  return (
    <div
      class={`${styles.OrderPill} ${
        timezones.filters.sortBy === local.sortBy ? styles.OrderPillSelected : ''
      }`}
      {...others}
    >
      <div class={styles.svgHolder}>
        <Switch fallback={<ArrowsGroup />}>
          <Match
            when={
              timezones.filters.sortBy === local.sortBy && timezones.filters.sortOrder === 'ASC'
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
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              ></path>
            </svg>
          </Match>
          <Match
            when={
              timezones.filters.sortBy === local.sortBy && timezones.filters.sortOrder === 'DSC'
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
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
          </Match>
        </Switch>
      </div>

      <div>{local.children}</div>
    </div>
  );
};

export default OrderPill;
