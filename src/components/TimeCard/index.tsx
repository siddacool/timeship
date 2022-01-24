import type { Component } from 'solid-js';
import { previewList } from '../../store';
import { getCurruntTimeFromDateUtc } from '../../time';
import styles from './style.module.css';

interface IProps {
  name?: string;
  timestamp?: string;
  timezone?: string;
  countryCode?: string;
  countryName?: string;
  noCities?: boolean;
}

const formattedTime = (utcTime: string, timezone: string | undefined) => {
  const { hour, minute, second } = getCurruntTimeFromDateUtc(utcTime, timezone);

  return `${hour}:${minute}:${second}`;
};

const TimeCard: Component<IProps> = (props) => {
  return (
    <div class={styles.TimeCard}>
      {props.name}, {props.countryName} {formattedTime(previewList.utcTime, props.timezone)}
    </div>
  );
};

export default TimeCard;
