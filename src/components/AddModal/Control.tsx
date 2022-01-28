import type { Component } from 'solid-js';
import { addModalToggle, saveSelectedToPreviewList, setSelectedFromList } from '../../store';
import AcceptDualButton from '../AcceptDualButton';
import styles from './style.module.css';

const handleAccept = () => {
  saveSelectedToPreviewList();
  addModalToggle();
};

const handleCancel = () => {
  setSelectedFromList('data', () => []);
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
