import type { Component } from 'solid-js';
import styles from './style.module.css';

interface IProps {
  index: number;
  name: string;
  timestamp: string;
  timezone: string;
  countryCode: string;
  countryName: string;
  cities: string[];
}

const TableRow: Component<IProps> = (props) => {
  return (
    <tr class={styles.TableRow}>
      <td>{props.index}</td>
      <td>{props.name}</td>
      <td>{props.timestamp}</td>
      <td>{props.timezone}</td>
      <td>{props.countryCode}</td>
      <td>{props.countryName}</td>
    </tr>
  );
};

export default TableRow;
