import type { Component } from 'solid-js';
import { Switch, Match } from 'solid-js';
import { orderTimezones, timezones } from '../../store';
import styles from './style.module.css';

interface IProps {
  name: string;
}

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
          d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
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
          d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
        ></path>
      </svg>
    </div>
  );
};

const SortableHead: Component<IProps> = (props) => {
  return (
    <th onClick={() => orderTimezones(props.name)} class={styles.SortableHead}>
      <div>
        <div class={styles.svgHolder}>
          <Switch fallback={<ArrowsGroup />}>
            <Match
              when={
                timezones.filters.sortBy === props.name && timezones.filters.sortOrder === 'ASC'
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
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                ></path>
              </svg>
            </Match>
            <Match
              when={
                timezones.filters.sortBy === props.name && timezones.filters.sortOrder === 'DSC'
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
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                ></path>
              </svg>
            </Match>
          </Switch>
        </div>

        <div>{props.name}</div>
      </div>
    </th>
  );
};

export default SortableHead;
