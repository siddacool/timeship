import type { Component } from 'solid-js';
import styles from './style.module.css';
import layeredWaves from '../../assets/layered-waves.png';

const BackgroundWave: Component = () => {
  return (
    <div class={styles.BackgroundWave} style={`background-image: url(${layeredWaves});`}></div>
  );
};

export default BackgroundWave;
