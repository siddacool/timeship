import type { Component } from 'solid-js';
import styles from './style.module.css';
import DropDown from '../DropDown';
import { addModalToggle, handleActionMenuToggle, poplutateSelected } from '../../store';
import Button from '../Button';

const handleAddCity = () => {
  addModalToggle();
  poplutateSelected;
};

const Menu: Component = () => {
  return (
    <>
      <div class={styles.Menu}>
        <Button
          class={styles.AddButton}
          color="white"
          elevation={3}
          rounded
          onClick={handleAddCity}
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </Button>
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
      </div>
      <DropDown />
    </>
  );
};

export default Menu;
