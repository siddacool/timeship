import { onCleanup } from 'solid-js';

export const clickOutside = (
  el: { contains: (arg0: any) => any },
  accessor: () => { (): any; new (): any },
) => {
  console.log('yo');

  const onClick = (e: { target: any }) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
};
