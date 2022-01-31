import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';
import CountryName from './CountryName';

interface IProps {
  style?: Object;
  tabIndex?: number;
  item: {
    name?: string;
    timestamp?: string;
    timezone?: string;
    countryCode?: string;
    countryName?: string;
    noCities?: boolean;
  };
}

const TimeCard: Component<IProps> = (props) => {
  return (
    <div
      class={`${styles.TimeCard}`}
      style={props.style}
      // Used for keyboard navigation and accessibility.
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <div class={`${styles.InternalContainer} ${elevationStyles['elevation-2']}`}>
        <div class={styles.NameHolder}>
          <div class={styles.Name}>{props.item.name}</div>
          <CountryName {...props.item} />
        </div>
        <DayTime {...props.item} />
      </div>
    </div>
  );
};

export default TimeCard;
