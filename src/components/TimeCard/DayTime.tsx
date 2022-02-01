import { Component, createMemo } from 'solid-js';
import { utcTime } from '../../store';
import { formattedTime, formattedDay, getCurruntTimeFromDateUtc } from '../../time';
import styles from './style.module.css';

interface IProps {
  name?: string;
  timestamp?: string;
  timezone?: string;
  d: any;
}

const DayTime: Component<IProps> = (props) => {
  const timeValue = createMemo(() => formattedTime(props.d));
  const dayValue = createMemo(() => formattedDay(props.d));

  return (
    <div class={styles.DayTime}>
      <div class={styles.Time}>{timeValue}</div>
      <div class={styles.Day}>{dayValue}</div>
    </div>
  );
};

export default DayTime;
