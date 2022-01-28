import type { Component } from 'solid-js';
import styles from './style.module.css';
import elevationStyles from '../../styles/elevation.module.css';
import Search from './Search';

const AddModal: Component = () => {
  return (
    <div class={styles.AddModal}>
      <div class={styles.screen}></div>
      <div class={`${styles.dialog} ${elevationStyles['elevation-3']}`}>
        <Search />
      </div>
    </div>
  );
};

export default AddModal;
