import { Component, Show } from 'solid-js';
import { settings } from '../../store';
import styles from './style.module.css';

interface IProps {
  timestamp?: string;
  timezone?: string;
  countryName?: string;
  noCities?: boolean;
}

const CountryName: Component<IProps> = (props) => {
  return (
    <div class={styles.CountryName}>
      , {props.countryName}
      <Show when={settings.utcDetails}>, {props.timestamp}</Show>
    </div>
  );
};

export default CountryName;
