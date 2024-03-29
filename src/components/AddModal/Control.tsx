import type { Component } from 'solid-js';
import {
  addModalToggle,
  saveSelectedToPreviewList,
  searchTimezones,
  setSelectedFromList,
} from '../../store';
import AcceptDualButton from '../AcceptDualButton';
import styles from './style.module.css';

const handleAccept = () => {
  saveSelectedToPreviewList();
  searchTimezones('');
  addModalToggle();
};

const handleCancel = () => {
  setSelectedFromList('data', () => []);
  searchTimezones('');
  addModalToggle();
};

const Control: Component = () => {
  return (
    <div class={styles.Control}>
      <AcceptDualButton actionAccept={handleAccept} actionCancel={handleCancel} />
    </div>
  );
};

export default Control;
