import { Component, createMemo } from 'solid-js';
import { Show } from 'solid-js';
import styles from './style.module.css';
import Selected from './Selected';
import { selectToggle, selectedFromList } from '../../store';

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

const ListItem: Component<IProps> = (props) => {
  const isSelected = createMemo(() =>
    selectedFromList.data.filter((d) => d === props.item._id).length ? true : false,
  );

  return (
    <div
      class={styles.ListItem}
      style={props.style}
      tabIndex={props.tabIndex}
      role="listitem"
      onClick={() => selectToggle(props.item._id)}
      data-isSelected={isSelected()}
    >
      <Selected isSelected={isSelected()} />
      <div class={styles.InternalContainer}>
        <div class={styles.Name}>{props.item.name}</div>
        <div class={styles.CountryName}>
          {props.item.countryName} ({props.item.timestamp})
        </div>
      </div>
    </div>
  );
};

export default ListItem;
