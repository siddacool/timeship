import { Component, createMemo } from 'solid-js';
import { utcTime } from '../../store';
import { formattedTime, formattedDay } from '../../time';
import styles from './style.module.css';

interface IProps {
  name?: string;
  timestamp?: string;
  timezone?: string;
}

const DayTime: Component<IProps> = (props) => {
  const timeValue = createMemo(() => formattedTime(utcTime.data, props.timezone));
  const dayValue = createMemo(() => formattedDay(utcTime.data, props.timezone));

  return (
    <div class={styles.DayTime}>
      <div class={styles.Time}>{timeValue}</div>
      <div class={styles.Day}>{dayValue}</div>
    </div>
  );
};

export default DayTime;
