import type { Component } from 'solid-js';
import { addModalToggle } from '../../store';
import AcceptDualButton from '../AcceptDualButton';
import styles from './style.module.css';

const handleAccept = () => {
  addModalToggle();
};

const handleCancel = () => {
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
