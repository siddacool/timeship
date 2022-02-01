import { Component, createMemo } from 'solid-js';
import { utcTime } from '../../store';
import { formattedTime, formattedDay, getDateTimeDetails } from '../../time';
import styles from './style.module.css';

interface IProps {
  name?: string;
  timestamp?: string;
  timezone?: string;
}

const DayTime: Component<IProps> = (props) => {
  const d = createMemo(() => getDateTimeDetails(utcTime.data, props.timezone));
  const timeValue = createMemo(() => formattedTime(d()));
  const dayValue = createMemo(() => formattedDay(d()));

  return (
    <div class={styles.DayTime}>
      <div class={styles.Time}>{timeValue}</div>
      <div class={styles.Day}>{dayValue}</div>
    </div>
  );
};

export default DayTime;
