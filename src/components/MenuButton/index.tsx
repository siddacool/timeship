import type { Component } from 'solid-js';
import styles from './style.module.css';
import DropDown from '../DropDown';
import { handleActionMenuToggle } from '../../store';
import Button from '../Button';

const MenuButton: Component = () => {
  return (
    <>
      <Button
        class={styles.MenuButton}
        color="white"
        elevation={3}
        onClick={handleActionMenuToggle}
        rounded
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          ></path>
        </svg>
      </Button>

      <DropDown />
    </>
  );
};

export default MenuButton;
