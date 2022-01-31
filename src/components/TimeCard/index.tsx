import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import DayTime from './DayTime';
import CountryName from './CountryName';
import { orderListActiveToggle } from '../../store';

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
  };
}

let buttonPressTimer: NodeJS.Timeout;

const handleReorder = () => {
  orderListActiveToggle();
};

const handleButtonPress = () => {
  buttonPressTimer = setTimeout(() => {
    handleReorder();
  }, 1000);
};

const handleButtonRelease = () => {
  clearTimeout(buttonPressTimer);
};

const TimeCard: Component<IProps> = (props) => {
  return (
    <div
      class={`${styles.TimeCard}`}
      style={props.style}
      // Used for keyboard navigation and accessibility.
      tabIndex={props.tabIndex}
      role="listitem"
    >
      <div
        class={`${styles.InternalContainer} ${elevationStyles['elevation-2']}`}
        onTouchStart={handleButtonPress}
        onTouchEnd={handleButtonRelease}
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
      >
        <div class={styles.NameHolder}>
          <div class={styles.Name}>{props.item.name}</div>
          <CountryName {...props.item} />
        </div>
        <DayTime {...props.item} />
      </div>
    </div>
  );
};

export default TimeCard;
