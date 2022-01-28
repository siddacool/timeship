import { Component, createSignal, onMount } from 'solid-js';
import { fetchTimezones, timezones } from '../../store';
import styles from './style.module.css';
import { VirtualContainer } from '@minht11/solid-virtual-container';
import ListItem from './ListItem';

const initialSelected: string[] = [];

export const [selected, setSelected] = createSignal(initialSelected);

export const selectItem = (id = '') => {
  const selectedMod = selected();

  if (!selectedMod.includes(id)) {
    selectedMod.push(id);
  } else {
    const index = selectedMod.indexOf(id);
    if (index > -1) {
      selectedMod.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

  setSelected(selectedMod);
};

const TimeSelectableList: Component = () => {
  onMount(() => {
    fetchTimezones();
  });

  let scrollTargetElement!: HTMLDivElement;

  return (
    <div style={{ overflow: 'auto' }} ref={scrollTargetElement} class={styles.TimeSelectableList}>
      <VirtualContainer
        items={timezones.data}
        scrollTarget={scrollTargetElement}
        itemSize={{ height: 60 }}
      >
        {ListItem}
      </VirtualContainer>
    </div>
  );
};

export default TimeSelectableList;
