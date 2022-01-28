import { Component, Show } from 'solid-js';
import styles from './style.module.css';

interface IProps {
  actionAccept?: any;
  actionCancel?: any;
  acceptContent?: any;
  cancelContent?: any;
}

const AcceptDualButton: Component<IProps> = (props) => {
  return (
    <div class={styles.AcceptDualButton}>
      <button class={styles.accept} onClick={props.actionAccept}>
        <Show when={props.acceptContent} fallback={<>Accept</>}>
          {props.acceptContent}
        </Show>
      </button>
      <button class={styles.cancel} onClick={props.actionCancel}>
        <Show when={props.cancelContent} fallback={<>Cancel</>}>
          {props.cancelContent}
        </Show>
      </button>
    </div>
  );
};

export default AcceptDualButton;
