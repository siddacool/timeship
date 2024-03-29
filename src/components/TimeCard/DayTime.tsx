import { Component, createMemo } from 'solid-js';
import { settings } from '../../store';
import { formattedTime, formattedDay, formattedTime24 } from '../../time';
import styles from './style.module.css';

interface IProps {
  name?: string;
  timestamp?: string;
  timezone?: string;
  d: any;
}

const DayTime: Component<IProps> = (props) => {
  const timeValue = createMemo(() =>
    settings.hours24 ? formattedTime24(props.d) : formattedTime(props.d),
  );
  const dayValue = createMemo(() => formattedDay(props.d));

  return (
    <div class={styles.DayTime}>
      <div class={styles.Time}>{timeValue}</div>
      <div class={styles.Day}>{dayValue}</div>
    </div>
  );
};

export default DayTime;
