import type { Component } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import Search from './Search';
import Control from './Control';
import Order from './Order';
import { addModalToggle } from '../../store';
import TimeSelectableList from '../TimeSelectableList';

const AddModal: Component = () => {
  return (
    <div class={styles.AddModal}>
      <div class={styles.screen} onClick={() => addModalToggle()}></div>
      <div class={`${styles.dialog} ${elevationStyles['elevation-3']}`}>
        <Search />
        <Order />
        <TimeSelectableList />
        <Control />
      </div>
    </div>
  );
};

export default AddModal;
