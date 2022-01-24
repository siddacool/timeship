import type { Component } from 'solid-js';
import { getCurruntTime } from '../../time';
import styles from './style.module.css';

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
    <div class={styles.TimeCard}>
      {props.name} {getCurruntTime(props.timezone)}
    </div>
  );
};

export default TimeCard;
