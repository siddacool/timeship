import type { Component } from 'solid-js';
import { createMemo } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';
import CountryName from './CountryName';
import { orderListActiveToggle, utcTime } from '../../store';
import { getCurruntTimeFromDateUtc } from '../../time';

interface IProps {
  style?: Object;
  tabIndex?: number;
  item: {
    name?: string;
    timestamp?: string;
    timezone?: string;
    countryCode?: string;
    countryName?: string;
    noCities?: boolean;
    timeOfDay?: string;
  };
}

let buttonPressTimer: NodeJS.Timeout;

const handleReorder = () => {
  orderListActiveToggle();
};

const handleButtonPress = () => {
  buttonPressTimer = setTimeout(() => {
    handleReorder();
  }, 600);
};

const handleButtonRelease = () => {
  clearTimeout(buttonPressTimer);
};

const TimeCard: Component<IProps> = (props) => {
  const d = createMemo(() => getCurruntTimeFromDateUtc(utcTime.data, props.item.timezone));

  return (
    <div
      class={`${styles.TimeCard}`}
      style={props.style}
      // Used for keyboard navigation and accessibility.
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <div
        class={`${styles.InternalContainer} ${elevationStyles['elevation-2']} time-of-day__${
          props.item.timeOfDay ? props.item.timeOfDay : d().timeOfDay
        }`}
        onTouchStart={handleButtonPress}
        onTouchEnd={handleButtonRelease}
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
      >
        <DayTime d={d()} {...props.item} />
        <div class={styles.NameHolder}>
          <article class={styles.Name}>{props.item.name}</article>
          <CountryName {...props.item} />
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
