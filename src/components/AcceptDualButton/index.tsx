import type { Component } from 'solid-js';
import styles from './style.module.css';

interface IProps {
  actionAccept?: any;
  actionCancel?: any;
}

const AcceptDualButton: Component<IProps> = (props) => {
  return (
    <div class={styles.AcceptDualButton}>
      <button class={styles.accept} onClick={props.actionAccept}>
        Accept
      </button>
      <button class={styles.cancel} onClick={props.actionCancel}>
        Cancel
      </button>
    </div>
  );
};

export default AcceptDualButton;
