import { Component, splitProps, mergeProps } from 'solid-js';
import elevationStyles from '../../styles/elevation.module.css';

interface IProps {
  elevation?: number;
  color?: 'default' | 'white' | 'white-primary' | 'primary' | 'safe' | 'danger';
  sqaure?: boolean;
  rounded?: boolean;
  class?: string;
  onClick?: any;
  disabled?: boolean;
  outline?: boolean;
}

const Button: Component<IProps> = (props) => {
  const propsMerge = mergeProps(
    { color: 'default', rounded: false, sqaure: false, elevation: 0, class: '', outline: false },
    props,
  );
  const [local, others] = splitProps(propsMerge, [
    'children',
    'color',
    'sqaure',
    'rounded',
    'elevation',
    'class',
    'outline',
  ]);

  return (
    <button
      class={`ui-button
        ${local.elevation ? elevationStyles[`elevation-${local.elevation}`] : ''}
        ${local.color !== 'default' ? `ui-button__${local.color}` : ''}
        ${local.rounded ? 'ui-button__rounded' : ''}
        ${local.sqaure ? 'ui-button__sqaure' : ''}
        ${local.outline ? 'ui-button__outline' : ''}
        ${local.class}
      `}
      {...others}
    >
      {local.children}
    </button>
  );
};

export default Button;
