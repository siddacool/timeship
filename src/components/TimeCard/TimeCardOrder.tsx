import { Component, createMemo } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';
import ReorderArrows from './ReorderArrows';
import RemoveButton from './RemoveButton';
import CountryName from './CountryName';
import AcceptButton from './AcceptButton';
import { getCurruntTimeFromDateUtc } from '../../time';
import { utcTime } from '../../store';

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
    timeOfDay?: string;
  };
}

const TimeCardOrder: Component<IProps> = (props) => {
  const d = createMemo(() => getCurruntTimeFromDateUtc(utcTime.data, props.item.timezone));

  return (
    <div
      class={`${styles.TimeCard} ${styles.TimeCardOrder}`}
      style={props.style}
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <article
        class={`${styles.InternalContainer} ${elevationStyles['elevation-2']} time-of-day__${
          props.item.timeOfDay ? props.item.timeOfDay : d().timeOfDay
        }`}
      >
        <ReorderArrows id={props.item._id} />
        <RemoveButton id={props.item._id} />
        <AcceptButton />
        <DayTime d={d()} {...props.item} />
        <div class={styles.NameHolder}>
          <div class={styles.Name}>{props.item.name}</div>
          <CountryName {...props.item} />
        </div>
      </article>
    </div>
  );
};

export default TimeCardOrder;
