import { Component, createMemo } from 'solid-js';
import { utcTime } from '../../store';
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
  const { hour, minute, am } = getCurruntTimeFromDateUtc(utcTime, timezone);

  return `${hour}:${minute} ${am}`;
};

const formattedDay = (utcTime: string, timezone: string | undefined) => {
  const { month, day, year } = getCurruntTimeFromDateUtc(utcTime, timezone);

  return `${day}, ${month} ${year}`;
};

const TimeCard: Component<IProps> = (props) => {
  const timeValue = createMemo(() => formattedTime(utcTime.data, props.timezone));
  const dayValue = createMemo(() => formattedDay(utcTime.data, props.timezone));

  return (
    <div class={styles.TimeCard}>
      {props.name}, {props.countryName} {timeValue}, {dayValue}
    </div>
  );
};

export default TimeCard;
