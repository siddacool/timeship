import { Component, Show } from 'solid-js';
import Button from '../Button';
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
      <Button class={styles.accept} onClick={props.actionAccept} color="primary">
        <Show when={props.acceptContent} fallback={<>Accept</>}>
          {props.acceptContent}
        </Show>
      </Button>
      <Button class={styles.cancel} onClick={props.actionCancel} color="white" outline>
        <Show when={props.cancelContent} fallback={<>Cancel</>}>
          {props.cancelContent}
        </Show>
      </Button>
    </div>
  );
};

export default AcceptDualButton;
