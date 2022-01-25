import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';

interface IProps {
  name?: string;
  timestamp?: string;
  timezone?: string;
  countryCode?: string;
  countryName?: string;
  noCities?: boolean;
}

const TimeCard: Component<IProps> = (props) => {
  return (
    <div class={`${styles.TimeCard} ${elevationStyles['elevation-2']}`}>
      <div class={styles.NameHolder}>
        <span class={styles.Name}>{props.name}</span>
        <Show when={!props.noCities}>
          (<span class={styles.CountryName}>{props.countryName}</span>)
        </Show>
      </div>
      <DayTime {...props} />
    </div>
  );
};

export default TimeCard;
