import type { Component } from 'solid-js';
import { Show, createMemo } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';
import ReorderArrows from './ReorderArrows';

interface IProps {
  style?: Object;
  tabIndex?: number;
  item: {
    _id: string;
    name?: string;
    timestamp?: string;
    timezone?: string;
    countryCode?: string;
    countryName?: string;
    noCities?: boolean;
  };
}

const TimeCardOrder: Component<IProps> = (props) => {
  const name = createMemo(() => props.item.name);

  return (
    <div
      class={`${styles.TimeCard} ${styles.TimeCardOrder}`}
      style={props.style}
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <article class={`${styles.InternalContainer} ${elevationStyles['elevation-2']}`}>
        <ReorderArrows id={props.item._id} />
        <div class={styles.NameHolder}>
          <div class={styles.Name}>{props.item.name}</div>
          <Show when={!props.item.noCities}>
            <div class={styles.CountryName}>{props.item.countryName}</div>
          </Show>
        </div>
        <DayTime {...props.item} />
      </article>
    </div>
  );
};

export default TimeCardOrder;
