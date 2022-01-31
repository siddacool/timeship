import { Component } from 'solid-js';
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
      {props.countryName} ({props.timestamp} {props.timezone})
    </div>
  );
};

export default CountryName;
