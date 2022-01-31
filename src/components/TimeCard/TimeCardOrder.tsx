import type { Component } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';
import ReorderArrows from './ReorderArrows';
import RemoveButton from './RemoveButton';
import CountryName from './CountryName';
import AcceptButton from './AcceptButton';

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
  };
}

const TimeCardOrder: Component<IProps> = (props) => {
  return (
    <div
      class={`${styles.TimeCard} ${styles.TimeCardOrder}`}
      style={props.style}
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <article class={`${styles.InternalContainer} ${elevationStyles['elevation-2']}`}>
        <ReorderArrows id={props.item._id} />
        <RemoveButton id={props.item._id} />
        <AcceptButton />
        <div class={styles.NameHolder}>
          <div class={styles.Name}>{props.item.name}</div>
          <CountryName {...props.item} />
        </div>
        <DayTime {...props.item} />
      </article>
    </div>
  );
};

export default TimeCardOrder;
